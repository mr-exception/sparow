package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

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

func main() {
	fmt.Printf("started service on port %d\n", 8080)
	http.HandleFunc("/heart-beat", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
