<?php

if(isset($_POST['username'])){
  $username = $_POST['username'];
}


?>

<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"> 

    <link rel = "stylesheet" href="styles.css">
    <script src="src/main.js"></script>
</head>

<body>

<button><a href="./item.php" class="button">Go to Google</a>
</button>

<form method = "post" action="/item.php">
  <p>sdf</p>
    <input name="username" type="hidden" value="V-Bucks">
  <button><img type = "submit" value = "Save" src="/VBucks.png"></button>
</form>


<!-- 
<a href="" class="custom-card">
  <div class="card" style="width: 15rem; display: inline-block">
    <img class="card-img-top" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Wrapped with a tag</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</a> -->
    <h1>Fortnite Website</h1>
    <h2 id="hours">Hours to Drop</h2>
    <!-- <div id = "sm" class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> -->
      <h2>Daily</h2>
      <div class ="container">
        <div class="row" id = "first">

        </div>
      </div>

      <h2>Featured</h2>
      <div class ="container">
        <div class="row" id = "second">

        </div>
      </div>

      <h2>Special</h2>
      <div class ="container">
        <div class="row" id = "third">

        </div>
      </div>

</body>

</html>