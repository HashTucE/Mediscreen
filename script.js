var db = db.getSiblingDB('mediscreen');

var lockfile = "/docker-entrypoint-initdb.d/script.lock"
if (db.getCollection("locks").findOne({ "filename": lockfile }) !== null) {
  print("Script already executed.")
  quit()
}

db.createCollection("notes")

db.notes.insertMany([
  { _id: -1, patientId: 1, note: "Le patient déclare qu'il se sent très bien. \r\n" + "Poids égal ou inférieur au poids recommandé", date: new Date("2023-02-06")},
  { _id: -2, patientId: 1, note: "Le patient déclare qu'il se sent fatigué pendant la journée. \r\n" + "Il se plaint également de douleurs musculaires. \r\n" + "Tests de laboratoire indiquant une microalbumine élevée", date: new Date("2023-03-01")},
  { _id: -3, patientId: 1, note: "Le patient déclare qu'il ne se sent pas si fatigué que ça. \r\n" + "Fumeur, il a arrêté dans les 12 mois précédents. \r\n" + "Tests de laboratoire indiquant que les anticorps sont élevés", date: new Date("2023-03-04")},
  { _id: -4, patientId: 2, note: "Le patient déclare qu'il ressent beaucoup de stress au travail. \r\n" + "Il se plaint également que son audition est anormale dernièrement", date: new Date("2023-01-06")},
  { _id: -5, patientId: 2, note: "Le patient déclare avoir fait une réaction aux médicaments au cours des 3 derniers mois. \r\n" + "Il remarque également que son audition continue d'être anormale", date: new Date("2023-02-12")},
  { _id: -6, patientId: 2, note: "Tests de laboratoire indiquant une microalbumine élevée", date: new Date("2023-03-03")},
  { _id: -7, patientId: 2, note: "Le patient déclare que tout semble aller bien. \r\n" + "Le laboratoire rapporte que l'hémoglobine A1C dépasse le niveau recommandé. \r\n" + "Le patient déclare qu’il fume depuis longtemps", date: new Date("2023-03-07")},
  { _id: -8, patientId: 3, note: "Le patient déclare qu'il fume depuis peu", date: new Date("2023-01-06")},
  { _id: -9, patientId: 3, note: "Tests de laboratoire indiquant une microalbumine élevée", date: new Date("2023-01-20")},
  { _id: -10, patientId: 3, note: "Le patient déclare qu'il est fumeur et qu'il a cessé de fumer l'année dernière. \r\n" + "Il se plaint également de crises d’apnée respiratoire anormales. \r\n" + "Tests de laboratoire indiquant un taux de cholestérol LDL élevé", date: new Date("2023-02-06")},
  { _id: -11, patientId: 3, note: "Tests de laboratoire indiquant un taux de cholestérol LDL élevé", date: new Date("2023-03-07")},
  { _id: -12, patientId: 4, note: "Le patient déclare qu'il lui est devenu difficile de monter les escaliers. \r\n" + "Il se plaint également d’être essoufflé. \r\n" + "Tests de laboratoire indiquant que les anticorps sont élevés. \r\n" + "Réaction aux médicaments", date: new Date("2023-01-06")},
  { _id: -13, patientId: 4, note: "Le patient déclare qu'il a mal au dos lorsqu'il reste assis pendant longtemps", date: new Date("2023-01-23")},
  { _id: -14, patientId: 4, note: "Le patient déclare avoir commencé à fumer depuis peu. \r\n" + "Hémoglobine A1C supérieure au niveau recommandé", date: new Date("2023-02-10")},
  { _id: -15, patientId: 5, note: "Le patient déclare avoir des douleurs au cou occasionnellement. \r\n" + "Le patient remarque également que certains aliments ont un goût différent. \r\n" + "Réaction apparente aux médicaments. \r\n" + "Poids corporel supérieur au poids recommandé", date: new Date("2023-01-06")},
  { _id: -16, patientId: 5, note: "Le patient déclare avoir eu plusieurs épisodes de vertige depuis la dernière visite. \r\n" + "Taille incluse dans la fourchette concernée", date: new Date("2023-01-23")},
  { _id: -17, patientId: 5, note: "Le patient déclare qu'il souffre encore de douleurs cervicales occasionnelles. \r\n" + "Tests de laboratoire indiquant une microalbumine élevée. \r\n" + "Fumeur, il a arrêté dans les 12 mois précédents", date: new Date("2023-02-10")},
  { _id: -18, patientId: 5, note: "Le patient déclare avoir eu plusieurs épisodes de vertige depuis la dernière visite. \r\n" + "Tests de laboratoire indiquant que les anticorps sont élevés", date: new Date("2023-03-07")},
  { _id: -19, patientId: 6, note: "Le patient déclare qu'il se sent bien. \r\n" + "Poids corporel supérieur au poids recommandé", date: new Date("2023-01-06")},
  { _id: -20, patientId: 6, note: "Le patient déclare qu'il se sent bien", date: new Date("2023-01-25")},
  { _id: -21, patientId: 7, note: "Le patient déclare qu'il se réveille souvent avec une raideur articulaire. \r\n" + "Il se plaint également de difficultés pour s’endormir. \r\n" + "Poids corporel supérieur au poids recommandé. \r\n" + "Tests de laboratoire indiquant un taux de cholestérol LDL élevé", date: new Date("2023-01-06")},
  { _id: -22, patientId: 8, note: "Les tests de laboratoire indiquent que les anticorps sont élevés. \r\n" + "Hémoglobine A1C supérieure au niveau recommandé", date: new Date("2023-01-06")},
  { _id: -23, patientId: 9, note: "Le patient déclare avoir de la difficulté à se concentrer sur ses devoirs scolaires. \r\n" + "Hémoglobine A1C supérieure au niveau recommandé", date: new Date("2023-01-06")},
  { _id: -24, patientId: 9, note: "Le patient déclare qu'il s’impatiente facilement en cas d’attente prolongée. \r\n" + "Il signale également que les produits du distributeur automatique ne sont pas bons. \r\n" + "Tests de laboratoire signalant des taux anormaux de cellules sanguines", date: new Date("2023-02-07")},
  { _id: -25, patientId: 9, note: "Le patient signale qu'il est facilement irrité par des broutilles. \r\n" + "Il déclare également que l'aspirateur des voisins fait trop de bruit. \r\n" + "Tests de laboratoire indiquant que les anticorps sont élevés", date: new Date("2023-03-07")},
  { _id: -26, patientId: 10, note: "Le patient déclare qu'il n'a aucun problème", date: new Date("2023-01-06")},
  { _id: -27, patientId: 10, note: "Le patient déclare qu'il n'a aucun problème. \r\n" + "Taille incluse dans la fourchette concernée. \r\n" + "Hémoglobine A1C supérieure au niveau recommandé", date: new Date("2023-01-28")},
  { _id: -28, patientId: 10, note: "Le patient déclare qu'il n'a aucun problème. \r\n" + "Poids corporel supérieur au poids recommandé. \r\n" + "Le patient a signalé plusieurs épisodes de vertige depuis sa dernière visite", date: new Date("2023-02-12")},
  { _id: -29, patientId: 10, note: "Le patient déclare qu'il n'a aucun problème. \r\n" + "Tests de laboratoire indiquant une microalbumine élevée", date: new Date("2023-03-03")}
])

db.getCollection("locks").insertOne({ "filename": lockfile })

print("Script executed with success.")