function calculateHours() {
    let start = document.getElementById("startTime").value;
    let end = document.getElementById("endTime").value;
    let warningMessage = document.getElementById("warningMessage");

    if (!start || !end) {
        warningMessage.textContent = "אנא הזן את שתי השעות.";
        return;
    }

    let startTime = new Date(`2024-01-01T${start}`);
    let endTime = new Date(`2024-01-01T${end}`);

    if (endTime < startTime) {
        warningMessage.textContent = "שעת היציאה לא יכולה להיות לפני שעת הכניסה!";
        return;
    }

    let diff = (endTime - startTime) / (1000 * 60 * 60); // ממיר למספר שעות
    document.getElementById("totalHours").textContent = diff.toFixed(2);
    
    // זיהוי שעות חריגות
    if (diff < 3) {
        warningMessage.textContent = "⚠️ שעות עבודה קצרות מדי (פחות מ-3 שעות)!";
    } else if (diff > 14) {
        warningMessage.textContent = "⚠️ שעות עבודה ארוכות מדי (מעל 14 שעות)!";
    } else {
        warningMessage.textContent = ""; // אין חריגה
    }
}
