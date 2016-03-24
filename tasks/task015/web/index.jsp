<%--
  Created by IntelliJ IDEA.
  User: Almaz
  Date: 24.03.2016
  Time: 16:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title></title>
  </head>
  <body>
<form action='/process' method='post'>
  <input type='textarea' name='text' width = 300px height = 300px><br>
  Count of <select size=4 name='operation'>
  <option value='1'>symbols</option>
  <option value='2'>words</option>
  <option value='3'>sentences</option>
  <option value='4'>indents</option>
  </select><br>"
  <input type='submit' value='Count'>"
  </form>
  </body>
</html>
