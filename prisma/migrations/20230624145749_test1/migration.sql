/*
  Warnings:

  - You are about to alter the column `name` on the `car` table. The data in that column could be lost. The data in that column will be cast from `String` to `Binary`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" BLOB NOT NULL
);
INSERT INTO "new_car" ("id", "name") SELECT "id", "name" FROM "car";
DROP TABLE "car";
ALTER TABLE "new_car" RENAME TO "car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
