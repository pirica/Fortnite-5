<html>
<head>
    <title></title>
</head>

<body>

<button><a href ="/item.php?name=Button">Everything</a></button>

<form action = "/item.php" method = "get">
    Name : <input type = "text" name = "name"> <br>
    <input type = "submit">
</form>

<?php

$articleName = $_GET['name'];

echo "Article Name is: " . $articleName;

?>

</body>

</html>