var listaFilmes = ["https://i.pinimg.com/originals/fb/da/65/fbda6573ce06d0398545d3ea80435ccb.jpg", "ttps://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg?region=0%2C0%2C800%2C1200", "https://images-na.ssl-images-amazon.com/images/I/81icP+NVQaL.jpg"];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + "/>");
}