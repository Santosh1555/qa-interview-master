QA INTERVIEW MASTER — FIRST VERSION

WHAT'S INCLUDED
- Offline-first installable web app (PWA)
- QA interview question bank across Java, Selenium, TestNG/BDD, API, SQL,
  Manual Testing, Jenkins/Git and US Healthcare
- Search and topic/status filters
- Mark questions completed and bookmark them
- Revision notes saved in this browser/device
- Offline caching after the app has been opened online once

IMPORTANT LIMITATIONS
- This first version does not include AI/voice mock interviews or a Java code compiler.
- Progress and notes are stored in this browser's local storage. They do not
  automatically sync between devices. Clearing browser/site data can erase them.
- Do not enter passwords, confidential employer data, or sensitive personal data.

HOW TO USE ON ANDROID
Recommended: host the folder on a static HTTPS website (for example, a private
static hosting service you control), then:
1. Open the HTTPS address in Chrome on Android.
2. Allow the first load to finish while online.
3. Tap Chrome menu (three dots) > Install app / Add to Home screen.
4. Launch it from the home screen. After the first successful load, the cached
   study library can work offline.

LOCAL TESTING ON A COMPUTER
1. Extract this ZIP.
2. Open a terminal in the extracted folder.
3. Run: python -m http.server 8000
4. Open http://localhost:8000 in Chrome.
Service workers require HTTPS or localhost. Opening index.html directly as a
file will show the app but will not enable reliable offline caching/install.

PRIVACY
The app does not send your study progress or notes to a server. They remain in
the browser storage on the device where you use the app. No camera, contacts,
or microphone permissions are requested.
