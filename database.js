var sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name text, 
 description text
 )`,
      (err) => {
        if (err) {
        } else {
          var insert = "INSERT INTO user (name, description) VALUES (?,?)";
          db.run(insert, [
            "c++",
            "to jezyk programowania ogolnego przeznaczenia wysokiego poziomu stworzony przez dunskiego informatyka Bjarne'a Stroustrupa i wydany po raz pierwszy w 1985 roku jako rozszerzenie języka programowania C lub „C with Classes”.Z biegiem czasu jezyk znacznie się rozwinął, a nowoczesny C++ ma terazzorientowane obiektowo, ogolne i funkcjonalne funkcje oprocz mozliwości manipulacji pamiecia niskiego poziomu. Prawie zawsze jest implementowany jako jezyk skompilowany, a wielu dostawcow zapewnia kompilatory C++, w tym Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle iIBM, wiec jest dostepny na wielu platformach.",
          ]);
          db.run(insert, [
            "c#",
            "to jezyk programowania wysokiego poziomu ogólnego przeznaczenia obsługujący wiele paradygmatów. Język C# obejmuje pisanie statyczne, silne pisanie, leksykalne, imperatywne, deklaratywne, funkcjonalne, ogólne, zorientowane obiektowo (oparte na klasach) i komponentowe.",
          ]);
          db.run(insert, [
            "javascript",
            "JS, to jezyk programowania, który obok HTML i CSS jest jedną z podstawowych technologii sieci World Wide Web. Od 2022 r. 98% witryn używa JavaScript po stronie klienta do zachowania strony internetowej, często z wykorzystaniem bibliotek innych firm. Wszystkie główne przeglądarki internetowe posiadają dedykowany silnik JavaScript do wykonywania kodu na urządzeniach użytkowników.",
          ]);
        }
      }
    );
  }
});
module.exports = db;
