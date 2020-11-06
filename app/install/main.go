package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"os"
	"strings"

	"github.com/jackc/pgx/v4"
)

// main project function
func main() {
	fmt.Printf("installing the core project\n")

	fmt.Printf("connecting to postgress database...\n")
	var connString string = fmt.Sprintf("postgresql://%s:%s@%s/%s", os.Getenv("PGSQL_USER"), os.Getenv("PGSQL_PASSWORD"), os.Getenv("PGSQL_HOST"), os.Getenv("PGSQL_DATABASE"))
	conn, err := pgx.Connect(context.Background(), connString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close(context.Background())
	fmt.Printf("connected!\n")
	file, err := ioutil.ReadFile("./install/queries.pgsql")
	if err != nil {
		fmt.Println(err)
	}
	requests := strings.Split(string(file), ";")
	for _, request := range requests {
		_, err := conn.Exec(context.Background(), request)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error: %s\n", err)
		}
	}
	fmt.Println("finished queries on postgres.")
}
