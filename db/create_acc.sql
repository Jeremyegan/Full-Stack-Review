INSERT INTO account 
(
    acc_email,
    acc_hash
)
VALUES
(
    $1,
    $2
)
RETURNING acc_id, acc_email;