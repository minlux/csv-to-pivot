# CSV to Pivot Table — User Guide

## What is this app?

CSV to Pivot Table lets you load a CSV file and instantly summarize it as a pivot table — similar to the pivot table feature in Excel or LibreOffice Calc. Everything runs in your browser; your data never leaves your device.

---

## Installing the app (PWA)

The app can be installed on your device and used without an internet connection after the first visit.

### Android (Chrome)

1. Open the app URL in Chrome.
2. Tap the **⋮** menu (top-right corner).
3. Tap **"Add to Home screen"**.
4. Confirm with **"Add"**.

The app icon will appear on your home screen and the app will open in its own window, without browser bars.

### iPhone / iPad (Safari)

1. Open the app URL in Safari.
2. Tap the **Share** button (the box with an arrow pointing up).
3. Scroll down and tap **"Add to Home Screen"**.
4. Confirm with **"Add"** (top-right).

> **Note:** On iOS, the app must be opened in Safari — Chrome and other browsers on iOS do not support PWA installation.

### Desktop (Chrome / Edge)

1. Open the app URL.
2. Click the **install icon** (⊕) in the address bar on the right side.
3. Click **"Install"** in the dialog.

---

## Using the app

### Step 1 — Load a CSV file

Tap or click the file picker at the top of the screen and select a `.csv` file from your device.

The app expects a file where:
- the **first row** contains column headers,
- each subsequent row contains one data record,
- numbers use either a **dot** (`1234.56`) or a **comma** (`1234,56`) as the decimal separator.

### Step 2 — Explore the tabs

After loading a file two tabs appear:

| Tab | Content |
|---|---|
| **Pivot Table** | The pivot configurator and the generated pivot table |
| **Raw Data** | A scrollable preview of all rows in the CSV file |

### Step 3 — Configure the pivot table

The grey box at the top of the **Pivot Table** tab lists all columns from your file.

- **Check a field** to add it to the pivot:
  - Text/category fields (e.g. Region, Product) are added as **row groupings**.
  - Numeric fields (e.g. Sales, Amount) are added as **values** and summed by default.
- **Uncheck a field** to remove it again.

Once at least one field is checked, the pivot table builds automatically below the configurator.

### Step 4 — Change the aggregation function

For each numeric field in the **Values** zone you can choose how to aggregate the numbers:

| Function | Meaning |
|---|---|
| **SUM** | Total of all values |
| **AVG** | Arithmetic mean |
| **COUNT** | Number of records |
| **MIN** | Smallest value |
| **MAX** | Largest value |

Tap the dropdown next to a value field to switch between these options.

### Step 5 — Remove a field

Tap the **✖** button next to a field in the Values or Rows zone to remove it from the pivot.

---

## Offline use

Once you have opened the app once with an internet connection, it is fully available offline. This works automatically — no extra steps are needed. When a new version of the app is available it will update silently in the background.
