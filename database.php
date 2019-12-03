<?php
  $url=parse_url(getenv("mysql://b33908491ab9af:317809f5@us-cdbr-iron-east-05.cleardb.net/heroku_de84a8938ef4660?reconnect=true"));

  $server = $url["host"];
  $username = $url["user"];
  $password = $url["pass"];
  $db = substr($url["path"],1);

  mysql_connect($server, $username, $password);

  mysql_select_db($db);
?>

