# Converting HTML Templates to PDF Files

## Documents Created

The following HTML templates have been created in `/public/downloads/templates/`:

1. ✅ `installation-manual.html`
2. ✅ `maintenance-guide.html` 
3. ✅ `technical-specs.html`
4. ✅ `safety-poster.html`
5. ✅ `msds-lpg.html` (already existed)
6. ✅ `emergency-response.html` (already existed)
7. ✅ `school-safety-checklist.html` (NEW)
8. ✅ `lab-safety-protocol.html` (NEW)

## How to Convert HTML to PDF

### Option 1: Browser Print (Recommended for Quick Generation)

1. Open each HTML file in Chrome/Edge browser
2. Press `Ctrl+P` (Cmd+P on Mac)
3. Select "Save as PDF" as destination
4. Settings:
   - Paper size: A4
   - Margins: Default
   - Background graphics: ON
5. Save to `/public/downloads/` with correct filename

### Option 2: Command Line with Headless Chrome

```bash
# Navigate to templates folder
cd public/downloads/templates

# Convert all HTML files to PDF
google-chrome --headless --disable-gpu --print-to-pdf=../installation-manual.pdf installation-manual.html
google-chrome --headless --disable-gpu --print-to-pdf=../maintenance-guide.pdf maintenance-guide.html
google-chrome --headless --disable-gpu --print-to-pdf=../technical-specs.pdf technical-specs.html
google-chrome --headless --disable-gpu --print-to-pdf=../safety-poster.pdf safety-poster.html
google-chrome --headless --disable-gpu --print-to-pdf=../msds-lpg.pdf msds-lpg.html
google-chrome --headless --disable-gpu --print-to-pdf=../emergency-response.pdf emergency-response.html
```

### Option 3: Using wkhtmltopdf (Professional Quality)

```bash
# Install wkhtmltopdf first
sudo apt-get install wkhtmltopdf  # Ubuntu/Debian
brew install wkhtmltopdf           # macOS

# Convert files
cd public/downloads/templates
wkhtmltopdf installation-manual.html ../installation-manual.pdf
wkhtmltopdf maintenance-guide.html ../maintenance-guide.pdf
wkhtmltopdf technical-specs.html ../technical-specs.pdf
wkhtmltopdf safety-poster.html ../safety-poster.pdf
wkhtmltopdf msds-lpg.html ../msds-lpg.pdf
wkhtmltopdf emergency-response.html ../emergency-response.pdf
wkhtmltopdf school-safety-checklist.html ../school-safety-checklist.pdf
wkhtmltopdf lab-safety-protocol.html ../lab-safety-protocol.pdf
```

### Option 4: Online Conversion (No Installation Required)

1. Go to https://www.sejda.com/html-to-pdf
2. Upload HTML file
3. Convert and download PDF
4. Repeat for each file

## Required PDF Files for Download Center

Place these PDFs in `/public/downloads/`:

- ✅ `msds-lpg.pdf` (2.4 MB target)
- ✅ `emergency-response.pdf` (1.8 MB target)
- ✅ `safety-poster.pdf` (1.2 MB target)
- ✅ `installation-manual.pdf` (3.5 MB target)
- ✅ `maintenance-guide.pdf` (2.1 MB target)
- ✅ `technical-specs.pdf` (1.5 MB target)
- ✅ `school-safety-checklist.pdf` (0.5 MB target)
- ✅ `lab-safety-protocol.pdf` (1.0 MB target)

## After Conversion

1. Verify all PDFs are in `/public/downloads/`
2. Check file sizes (compress if needed)
3. Test download functionality on website
4. Verify all links work correctly

## Testing Downloads

```bash
# Test that PDFs exist
ls -lh public/downloads/*.pdf

# Check file sizes
du -h public/downloads/*.pdf
```

The Download Center on `/safety` page will automatically work once PDFs are in place!
