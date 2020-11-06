package register

import (
	"fmt"
	"net/http"
)

func Init(w http.ResponseWriter, r *http.Request) {

	fmt.Fprintf(w, `register`)
}
