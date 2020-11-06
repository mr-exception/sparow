package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

// handler function handles all requests from web
func handler(w http.ResponseWriter, r *http.Request) {
	type HeartBeat struct {
		Ok   bool  `json:"ok"`
		Time int64 `json:"time"`
	}
	responseStruct := HeartBeat{}
	responseStruct.Ok = true
	responseStruct.Time = time.Now().Unix()

	responseText, _ := json.Marshal(responseStruct)

	fmt.Fprintf(w, `%s`, responseText)
}

// main project function
func main() {
	targetPort := os.Getenv("HTTP_PORT")
	fmt.Printf("started service on port %s\n", targetPort)
	http.HandleFunc("/heart-beat", handler)
	log.Fatal(http.ListenAndServe(":"+targetPort, nil))
}
