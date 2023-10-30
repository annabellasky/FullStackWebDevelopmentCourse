title New note in Single page app diagram

note over browser:
browser starts executing js-code it fetched from the server
the event handler creates a new note and add to the list,
rerenders the note list on the page
end note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
