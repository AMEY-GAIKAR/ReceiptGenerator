export default function Home() {
  return (
    <div>
      <nav id="navbar">
    <a href="#" class="logo">
      <img src="sies.svg" alt="Your Logo"/> </a>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
      </nav>
      <div id="fee-container">
    <h2>Student Fee Detail</h2>
  </div>
  <div id="input-container">
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name"/>
    <label for="rollno">Roll No.:</label>
    <input type="text" id="rollno" name="rollno" placeholder="Enter your roll number"/>
    <label for="year">Year:</label>
    <select id="year" name="year">
      <option value="">Select Year</option>
      <option value="FE">FE</option>
      <option value="SE">SE</option>
      <option value="DSE">DSE</option>
      <option value="TE">TE</option>
      <option value="BE">BE</option>
      </select>
    <label for="branch">Branch</label>
    <select id="branch" name="branch">
    <option value="">Select Branch</option>
      <option value="CE">Computer Engineering</option>
      <option value="IT">Information Technology Engineering</option>
      <option value="ME">Mechanical Engineering</option>
      <option value="EXTC">Electronics and Telecommunication Engineering</option>
      <option value="ECS">Electronics and Computer Science Engineering</option>
      <option value="AIDS">Artificial Intelligence and Data Science Engineering</option>
      <option value="AIML">Artificial Intelligence and Machine Learning Engineering</option>
      <option value="CSE-IOT">Computer Science Engineering (IOT)</option>
    </select>
    <label for="category">Category</label>
    <select id="category" name="category">
    <option value="">Select Category</option>   
    <option value="general">General</option>
    <option value="sc/st">SC/ST</option>
    <option value="EWS">EWS</option>
    <option value="tfws">TFWS</option>
    </select>
    <label for="Amount">Amount Paid</label>
    <input  type="number" id="Amount" name="Amount" placeholder="Enter the Amount Paid"/>
    <label for="transaction_id">Transaction ID</label>
    <input  type="text" id="transaction_id" name="transaction_id" placeholder="Enter the Transaction ID"/>
    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </form>
</div>

    </div>  
  );
}
