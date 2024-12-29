SET
    GLOBAL event_scheduler = ON;

CREATE EVENT update_loan_status ON SCHEDULE EVERY 1 DAY STARTS CURRENT_TIMESTAMP DO BEGIN
UPDATE Loan
SET
    status = 'overdue'
WHERE
    status = 'ongoing'
    AND returnDueDate < CURRENT_DATE;

END;