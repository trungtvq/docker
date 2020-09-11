package main

import (
	"fmt"
	badger "github.com/dgraph-io/badger"
	"log"
)

func main() {
	// Open the Badger database located in the /tmp/badger directory.
	// It will be created if it doesn't exist.
	db, err := badger.Open(badger.DefaultOptions("/data/badger"))
	if err != nil {
		log.Fatal(err)
	}
	tables := db.Tables(true)
	fmt.Println(tables[0])
	db.PrintHistogram(tables[0].Left)
	db
	defer db.Close()
	// Your code here…
}
