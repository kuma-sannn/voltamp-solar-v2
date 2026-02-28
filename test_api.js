
async function test() {
    const data = {
        name: "Test User",
        phone: "+919876543210",
        monthlyBill: "5000",
        propertyType: "Residential"
    };

    try {
        const response = await fetch("http://localhost:3000/api/consultation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        console.log("Status:", response.status);
        const result = await response.json();
        console.log("Result:", result);
    } catch (err) {
        console.error("Test failed:", err);
    }
}

test();
