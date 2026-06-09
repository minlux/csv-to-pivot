# CSV to Pivot Table — Benutzerhandbuch

## Was ist diese App?

CSV to Pivot Table lädt eine CSV-Datei und erstellt daraus eine Pivot-Tabelle – ähnlich wie die Pivot-Funktion in Excel oder LibreOffice Calc. Alles läuft im Browser; die Daten verlassen das Gerät zu keinem Zeitpunkt.

---

## App installieren (PWA)

Die App kann auf dem Gerät installiert und nach dem ersten Besuch auch ohne Internetverbindung genutzt werden.

### Android (Chrome)

1. App-URL in Chrome öffnen.
2. Menü **⋮** (oben rechts) antippen.
3. **„Zum Startbildschirm hinzufügen"** auswählen.
4. Mit **„Hinzufügen"** bestätigen.

Das App-Symbol erscheint auf dem Startbildschirm und die App öffnet sich in einem eigenen Fenster ohne Browser-Leisten.

### iPhone / iPad (Safari)

1. App-URL in Safari öffnen.
2. **Teilen**-Schaltfläche antippen (Kasten mit Pfeil nach oben).
3. Nach unten scrollen und **„Zum Home-Bildschirm"** antippen.
4. Mit **„Hinzufügen"** (oben rechts) bestätigen.

> **Hinweis:** Auf iOS muss die App in Safari geöffnet werden – Chrome und andere Browser unterstützen die PWA-Installation auf iOS nicht.

### Desktop (Chrome / Edge)

1. App-URL öffnen.
2. Das **Installations-Symbol** (⊕) rechts in der Adressleiste anklicken.
3. Im Dialog auf **„Installieren"** klicken.

---

## App verwenden

### Schritt 1 — CSV-Datei laden

Oben auf der Seite den Datei-Auswähler antippen oder anklicken und eine `.csv`-Datei vom Gerät auswählen.

Die App erwartet eine Datei, bei der:
- die **erste Zeile** die Spaltenüberschriften enthält,
- jede weitere Zeile einen Datensatz darstellt,
- Zahlen entweder mit **Punkt** (`1234.56`) oder **Komma** (`1234,56`) als Dezimaltrennzeichen geschrieben sind.

### Schritt 2 — Tabs erkunden

Nach dem Laden der Datei erscheinen zwei Tabs:

| Tab | Inhalt |
|---|---|
| **Pivot-Tabelle** | Konfigurator und die erzeugte Pivot-Tabelle |
| **Rohdaten** | Scrollbare Vorschau aller Zeilen der CSV-Datei |

### Schritt 3 — Pivot-Tabelle konfigurieren

Das graue Feld oben im Tab **Pivot-Tabelle** listet alle Spalten der Datei auf.

- **Feld ankreuzen**, um es zur Pivot-Tabelle hinzuzufügen:
  - Text- und Kategorie-Felder (z. B. Region, Produkt) werden als **Zeilengruppierung** verwendet.
  - Numerische Felder (z. B. Umsatz, Betrag) werden als **Werte** hinzugefügt und standardmäßig summiert.
- **Feld abwählen**, um es wieder zu entfernen.

Sobald mindestens ein Feld ausgewählt ist, wird die Pivot-Tabelle darunter automatisch aufgebaut.

### Schritt 4 — Aggregationsfunktion ändern

Für jedes numerische Feld im Bereich **Werte** kann die Berechnungsmethode gewählt werden:

| Funktion | Bedeutung |
|---|---|
| **SUM** | Summe aller Werte |
| **AVG** | Arithmetischer Mittelwert |
| **COUNT** | Anzahl der Datensätze |
| **MIN** | Kleinster Wert |
| **MAX** | Größter Wert |

Das Dropdown neben dem Feld antippen, um zwischen den Optionen zu wechseln.

### Schritt 5 — Feld entfernen

Die **✖**-Schaltfläche neben einem Feld antippen, um es aus der Pivot-Tabelle zu entfernen.

---

## Offline-Nutzung

Nach dem ersten Besuch mit Internetverbindung steht die App vollständig offline zur Verfügung. Das funktioniert automatisch – es sind keine zusätzlichen Schritte nötig. Wenn eine neue Version der App verfügbar ist, wird sie im Hintergrund still aktualisiert und beim nächsten Start übernommen.
