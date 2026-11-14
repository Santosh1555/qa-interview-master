const topics = [
 {name:"Core Java",icon:"☕",desc:"OOP, strings, collections"},
 {name:"Selenium",icon:"🧭",desc:"WebDriver, waits, framework"},
 {name:"TestNG & BDD",icon:"🧪",desc:"Annotations, Cucumber"},
 {name:"API Testing",icon:"🔌",desc:"Postman, REST Assured"},
 {name:"SQL",icon:"🗄️",desc:"Queries, joins, validation"},
 {name:"Manual Testing",icon:"📋",desc:"STLC, test design, defects"},
 {name:"Jenkins & Git",icon:"🚀",desc:"CI/CD, version control"},
 {name:"US Healthcare",icon:"🏥",desc:"Payer, claims, pricing"}
];
const questions = [
["Core Java","Explain the four pillars of OOP with examples.","Encapsulation bundles data and methods and controls access. Inheritance lets a class reuse or extend another class. Polymorphism lets the same method call behave differently, commonly through overloading and overriding. Abstraction exposes essential behaviour while hiding implementation details, using interfaces and abstract classes."],
["Core Java","Difference between ArrayList and LinkedList?","ArrayList uses a resizable array: fast random access, but insertions/removals in the middle can shift elements. LinkedList uses linked nodes: indexed access is slower, while insertion/removal through an existing iterator or at the ends can be efficient. Choose based on access and update patterns."],
["Core Java","How do HashSet and TreeSet differ?","HashSet stores unique elements with no guaranteed iteration order and typically offers average O(1) add, remove and contains. TreeSet keeps elements sorted and typically offers O(log n) operations. TreeSet needs natural ordering or a Comparator."],
["Core Java","How would you find duplicate numbers in an array?","Use a HashSet to track values already seen. For each number, add it; if add() returns false, the number is a duplicate. This is O(n) expected time and O(n) extra space."],
["Core Java","What is the difference between == and equals()?","For objects, == compares references (whether they are the same object). equals() compares logical equality when the class implements it appropriately. For primitives, == compares values."],
["Core Java","What is exception handling? Difference between checked and unchecked exceptions?","Exception handling uses try, catch, finally, throw and throws to handle abnormal conditions. Checked exceptions are verified by the compiler and must be caught or declared. RuntimeException and its subclasses are unchecked."],
["Selenium","What is Selenium WebDriver?","WebDriver is an API for automating browser interactions. It drives browsers through browser-specific drivers or supported browser automation implementations. It can locate elements, interact with them, navigate and verify page behaviour."],
["Selenium","Implicit wait vs explicit wait?","Implicit wait applies globally to element location calls. Explicit wait polls for a particular condition, such as visibility or clickability, until a timeout. Prefer explicit waits for predictable synchronisation; avoid mixing implicit and explicit waits because timeout behaviour can become confusing."],
["Selenium","How do you handle a stale element exception?","A stale element reference means the DOM element has changed or been detached. Re-locate the element after the page update, wait for the relevant condition, and avoid caching WebElement references across refreshes or dynamic updates."],
["Selenium","How do you handle multiple windows?","Store the parent handle, getWindowHandles(), switch to the required handle, perform actions, then switch back to the parent. Identify the target window by title, URL or a known handle rather than relying on set order."],
["Selenium","What is Page Object Model?","POM is a design pattern where each page or component has a class containing its locators and page actions. Tests call readable methods instead of duplicating locators. It improves maintainability and separation of test logic from UI details."],
["Selenium","How do you take a screenshot in Selenium?","Cast the driver to TakesScreenshot, call getScreenshotAs(OutputType.FILE), then copy the file to a target path using Files.copy or an appropriate file utility. Capture screenshots in failure hooks or listeners when useful."],
["Selenium","How do you handle alerts?","Use driver.switchTo().alert(), then accept(), dismiss(), getText() or sendKeys() depending on the alert type. Wait until the alert is present before switching when it appears asynchronously."],
["TestNG & BDD","What are common TestNG annotations?","Common annotations include @BeforeSuite, @BeforeTest, @BeforeClass, @BeforeMethod, @Test, @AfterMethod, @AfterClass, @AfterTest and @AfterSuite. Their order defines setup and teardown at different scopes."],
["TestNG & BDD","What is a DataProvider in TestNG?","A @DataProvider method returns test data, often as Object[][], and is referenced by a @Test(dataProvider=\"name\"). It lets the same test execute with multiple data sets."],
["TestNG & BDD","What is Cucumber BDD?","Cucumber supports Behaviour-Driven Development using readable Gherkin scenarios such as Given, When and Then. Step definitions connect those steps to automation code. Feature files describe behaviour in business-readable language."],
["API Testing","What do GET, POST, PUT, PATCH and DELETE mean?","GET retrieves a resource. POST commonly creates or triggers processing. PUT generally replaces a resource representation and is usually idempotent. PATCH applies a partial update. DELETE removes a resource; exact behaviour depends on the API contract."],
["API Testing","What do you validate in an API response?","Validate status code, response body and schema, headers, content type, response time where relevant, business rules, error messages, authentication/authorisation behaviour, and any required database side effects."],
["API Testing","What is the difference between Postman and REST Assured?","Postman is a GUI/API client useful for exploratory testing, collections and manual or scripted checks. REST Assured is a Java library used to write API automation tests that integrate with frameworks such as TestNG or JUnit and CI pipelines."],
["API Testing","What is the difference between authentication and authorisation?","Authentication verifies who the caller is. Authorisation determines what the authenticated caller is allowed to access or do."],
["SQL","Difference between WHERE and HAVING?","WHERE filters rows before grouping and aggregation. HAVING filters groups after GROUP BY and can use aggregate conditions such as COUNT(*) > 1."],
["SQL","What is the difference between INNER JOIN and LEFT JOIN?","INNER JOIN returns matching rows from both tables. LEFT JOIN returns every row from the left table and matching right-side rows; unmatched right-side columns are NULL."],
["SQL","How do you find the second-highest salary?","One approach is: SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees); This returns the second distinct salary. DENSE_RANK is useful when you need ranked rows."],
["SQL","How do you identify duplicate records?","Group by the candidate key and use HAVING COUNT(*) > 1. Example: SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;"],
["Manual Testing","What is the difference between severity and priority?","Severity describes the impact of a defect on the system. Priority describes how urgently it should be fixed. A cosmetic issue on a critical release screen may have low severity but high priority."],
["Manual Testing","Explain the STLC phases.","Requirement analysis, test planning, test case design/development, test environment setup, test execution, defect reporting/tracking, and test closure. Activities can overlap in Agile delivery."],
["Manual Testing","What is regression testing?","Regression testing checks that changes, fixes or enhancements have not adversely affected existing functionality. It is often risk-based and can be automated for repeatable flows."],
["Jenkins & Git","How do you investigate a Jenkins automation failure?","Check the build result, console output, stack trace, screenshots and reports. Reproduce locally, compare environment/browser/driver versions and test data, then classify it as an application defect, environment issue, data issue or flaky synchronisation. Fix the cause and rerun."],
["Jenkins & Git","What is the difference between git pull and git fetch?","git fetch downloads remote changes and updates remote-tracking references without merging them into the current branch. git pull fetches and then integrates changes, typically by merge or rebase depending on configuration."],
["US Healthcare","What is a healthcare payer?","A payer is an organisation such as a health insurer or health plan that administers coverage and processes claims. Payer systems can manage members, benefits, provider networks, claims, pricing and payments."],
["US Healthcare","What is a claim in US healthcare?","A claim is a request for payment submitted by a provider for healthcare services delivered to a member. The payer validates eligibility, benefits, provider and service details, applies pricing and adjudication rules, and determines payment or denial."],
["US Healthcare","What is the role of a claim pricer such as NetworX Pricer?","A claim pricing engine applies configured contract and reimbursement logic to calculate allowed amounts for services. QA can validate input data, pricing methodology, expected allowed amounts, adjustments and outputs against approved scenarios. Describe only the modules and responsibilities you have actually worked on."]
];
const state = JSON.parse(localStorage.getItem("qaim-state") || "{}");
state.done ||= []; state.saved ||= [];
let activeTopic = "All", current = null;
const $ = id => document.getElementById(id);
function persist(){localStorage.setItem("qaim-state",JSON.stringify(state));renderStats();renderQuestions();}
function renderStats(){$("completedCount").textContent=state.done.length;$("savedCount").textContent=state.saved.length;$("progressPct").textContent=Math.round(state.done.length/questions.length*100)+"%";}
function renderCategories(){
 $("categories").innerHTML=topics.map(t=>`<button class="category ${activeTopic===t.name?"active":""}" data-topic="${t.name}"><span class="cat-icon">${t.icon}</span><b>${t.name}</b><small>${t.desc}</small></button>`).join("");
 $("categories").querySelectorAll("button").forEach(b=>b.onclick=()=>{activeTopic=activeTopic===b.dataset.topic?"All":b.dataset.topic;renderCategories();$("topicFilter").value=activeTopic;renderQuestions();});
 $("topicFilter").innerHTML='<option value="All">All topics</option>'+topics.map(t=>`<option>${t.name}</option>`).join("");
}
function renderQuestions(){
 const term=$("searchInput").value.toLowerCase(), topic=$("topicFilter").value, status=$("statusFilter").value;
 const list=questions.map((q,i)=>({q,i})).filter(({q,i})=>(topic==="All"||q[0]===topic)&&(activeTopic==="All"||q[0]===activeTopic)&&(!term||(q[1]+" "+q[0]+" "+q[2]).toLowerCase().includes(term))&&(status==="All"||(status==="Completed"?state.done.includes(i):status==="Pending"?!state.done.includes(i):state.saved.includes(i))));
 $("questionCount").textContent=`${list.length} questions`;
 $("questionList").innerHTML=list.length?list.map(({q,i})=>`<div class="question" data-index="${i}"><span class="q-number">${String(i+1).padStart(2,"0")}</span><span class="q-main"><b>${q[1]}</b><small>${q[0]}</small></span>${state.done.includes(i)?'<span class="q-state">Completed</span>':state.saved.includes(i)?'<span class="q-state">Bookmarked</span>':''}<span class="q-arrow">›</span></div>`).join(""):'<div class="empty">No questions match. Try another search or filter.</div>';
 $("questionList").querySelectorAll(".question").forEach(el=>el.onclick=()=>openQuestion(+el.dataset.index));
}
function openQuestion(i){current=i;const q=questions[i];$("detailTopic").textContent=q[0];$("detailTitle").textContent=q[1];$("detailAnswer").innerHTML='<p>'+q[2].replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")+'</p>';updateModalButtons();$("detailModal").classList.remove("hidden");}
function updateModalButtons(){$("bookmarkBtn").textContent=state.saved.includes(current)?"★ Bookmarked":"☆ Bookmark";$("completeBtn").textContent=state.done.includes(current)?"✓ Completed":"Mark completed";}
$("closeModal").onclick=()=>$("detailModal").classList.add("hidden");
$("detailModal").onclick=e=>{if(e.target===$("detailModal"))$("detailModal").classList.add("hidden")};
$("bookmarkBtn").onclick=()=>{state.saved=state.saved.includes(current)?state.saved.filter(x=>x!==current):[...state.saved,current];persist();updateModalButtons();};
$("completeBtn").onclick=()=>{state.done=state.done.includes(current)?state.done.filter(x=>x!==current):[...state.done,current];persist();updateModalButtons();};
$("searchInput").oninput=renderQuestions;$("topicFilter").onchange=()=>{activeTopic="All";renderCategories();renderQuestions();};$("statusFilter").onchange=renderQuestions;
$("notes").value=localStorage.getItem("qaim-notes")||"";let noteTimer;$("notes").oninput=()=>{ $("saveStatus").textContent="Saving…";clearTimeout(noteTimer);noteTimer=setTimeout(()=>{localStorage.setItem("qaim-notes",$("notes").value);$("saveStatus").textContent="Saved on this device.";},300);};
$("clearNotes").onclick=()=>{if(confirm("Clear your revision notes on this device?")){$("notes").value="";localStorage.removeItem("qaim-notes");$("saveStatus").textContent="Notes cleared.";}}
let deferredPrompt;$("installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBtn").classList.add("hidden");}};
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installBtn").classList.remove("hidden");});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
renderCategories();renderStats();renderQuestions();