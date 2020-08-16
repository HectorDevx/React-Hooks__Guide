const user1 = {
  name: "Gerardo Reyes",
  username: "luxdex",
  country: "Mexico",
  social: {
    facebook: "https://facebook.com",
    twitter: "https:twitter.com",
  },
};

const saluda = (user) => {
  // Desestructuración nueva
  const { name, country, social } = user;
  // Primero desestructuramos el objeto y luego lo desestructuramos para obtener el valor deseado.
  // Cambiamos el nombre de twitter por tw.
  const { twitter: tw } = social;

  //Desestructuración vieja
  // const name = user.name;
  // const country = user.country;

  console.log(`Hola soy ${name} y vivo en ${country}. Mi twitter es: ${tw}`);
};

saluda(user1);
