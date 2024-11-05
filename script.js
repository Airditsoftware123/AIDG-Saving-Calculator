function calculateSavings() {
    // Clear previous error
    document.getElementById('error').innerText = '';
    
    // Get user input values
    const records = parseFloat(document.getElementById('records').value);
    const errorRate = parseFloat(document.getElementById('errorRate').value) / 100;
    const costPerError = parseFloat(document.getElementById('costPerError').value);
    const timeSavings = parseFloat(document.getElementById('timeSavings').value) / 100;
    const aidgCost = parseFloat(document.getElementById('aidgCost').value);
  
    // Validate inputs
    if (isNaN(records) || isNaN(errorRate) || isNaN(costPerError) || isNaN(timeSavings) || isNaN(aidgCost)) {
      document.getElementById('error').innerText = 'Please fill out all fields with valid numbers.';
      return;
    }
  
    // Calculations for losses with Normal Data Handling
    const totalErrors = records * errorRate;
    const totalLoss = totalErrors * costPerError;
  
    // Calculations for savings with AIDG
    const estimatedSavings = totalLoss * timeSavings;
    const netSavings = estimatedSavings - aidgCost;
    const roi = (netSavings / aidgCost) * 100;
  
    // Display results
    document.getElementById('totalErrors').innerText = totalErrors.toFixed(2);
    document.getElementById('totalLoss').innerText = totalLoss.toFixed(2);
    document.getElementById('netSavings').innerText = netSavings.toFixed(2);
    document.getElementById('roiPercentage').innerText = roi.toFixed(2);
    document.getElementById('results').style.display = 'block';
  
   // Show the results with animation
   const resultsDiv = document.getElementById('results');
   resultsDiv.style.display = 'block';
 
   // Trigger the cracker burst effect
   triggerColorfulCrackerBurst(resultsDiv);
 }
 
 function triggerColorfulCrackerBurst(targetElement) {
   const rect = targetElement.getBoundingClientRect();
   const centerY = rect.top + rect.height / 2;
 
   // Create colorful crackers moving towards the center
   for (let i = 0; i < 20; i++) {
     createCracker(rect.right + 10, centerY - 50 + i * 10, 'left');
     createCracker(rect.left - 20, centerY - 50 + i * 10, 'right');
   }
 }
 
 function createCracker(x, y, direction) {
   const cracker = document.createElement('div');
   cracker.classList.add('cracker');
 
   // Assign random colors
   const colors = ['#ff4500', '#ffa500', '#ff6347', '#00ff00', '#1e90ff', '#ff69b4', '#ffff00'];
   cracker.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
 
   // Set random direction towards the center
   const angle = (direction === 'left' ? Math.PI : 0) + (Math.random() - 0.5) * Math.PI / 4;
   const distance = Math.random() * 100 + 50; // Random distance between 50 and 150 pixels
 
   cracker.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
   cracker.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
 
   // Set the initial position of the cracker
   cracker.style.left = `${x}px`;
   cracker.style.top = `${y}px`;
 
   // Add cracker to the document body
   document.body.appendChild(cracker);
 
   // Remove cracker after animation completes
   setTimeout(() => cracker.remove(), 2000);
 }