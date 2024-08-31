//your JS code here. If required.
const output = document.getElementById('output');
const loadingRow = document.getElementById('loadingRow');


function createRandomPromise(promiseNum) {
    return new Promise((resolve) => {
        const time = (Math.random() * 2 + 1).toFixed(3); 
        setTimeout(() => {
            resolve({ promiseNum, time });
        }, time * 1000);
    });
}

// Create 3 promises
const promise1 = createRandomPromise(1);
const promise2 = createRandomPromise(2);
const promise3 = createRandomPromise(3);

// Start time to calculate total duration
const startTime = performance.now();

// Handle all promises
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        // Calculate total time
        const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

        // Remove loading row
        loadingRow.remove();

        // Populate table with results
        results.forEach(result => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            cell1.textContent = `Promise ${result.promiseNum}`;
            cell2.textContent = result.time;
            row.appendChild(cell1);
            row.appendChild(cell2);
            output.appendChild(row);
        });

        // Add a row for total time
        const totalRow = document.createElement('tr');
        const totalCell1 = document.createElement('td');
        const totalCell2 = document.createElement('td');
        totalCell1.textContent = 'Total';
        totalCell2.textContent = totalTime;
        totalRow.appendChild(totalCell1);
        totalRow.appendChild(totalCell2);
        output.appendChild(totalRow);
    });





