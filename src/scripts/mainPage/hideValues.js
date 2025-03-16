let state = true;
const originalValues = {
    funds: "",
    totalIn: "",
    totalOut: "",
    tableValues: []
};

export const hideValues = () => {
    if (state) {
        // Store original values before hiding
        originalValues.funds = $("#funds").text();
        originalValues.totalIn = $("#totalIn").text();
        originalValues.totalOut = $("#totalOut").text();
        
        // Replace with dashes
        $("#funds").text("———");
        $("#totalIn").text("———");
        $("#totalOut").text("———");
        
        // Hide values in the table
        $("#expensesTable tr").each(function() {
            const $valueCell = $(this).find("td:last-child");
            originalValues.tableValues.push($valueCell.html());
            $valueCell.html("———");
        });
        
        // Toggle eye icons
        $(".bi-eye").addClass("d-none");
        $(".bi-eye-slash").removeClass("d-none");
    } else {
        // Restore original values
        $("#funds").text(originalValues.funds);
        $("#totalIn").text(originalValues.totalIn);
        $("#totalOut").text(originalValues.totalOut);
        
        // Restore table values
        $("#expensesTable tr").each(function(index) {
            if (index < originalValues.tableValues.length) {
                $(this).find("td:last-child").html(originalValues.tableValues[index]);
            }
        });
        originalValues.tableValues = [];
        
        // Toggle eye icons
        $(".bi-eye").removeClass("d-none");
        $(".bi-eye-slash").addClass("d-none");
    }
    
    // Toggle state
    state = !state;
};