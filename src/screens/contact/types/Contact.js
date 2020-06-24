const Contact = ({
  id,
  firstName,
  lastName,
  age,
  photo,
} = {}) => ({
  id: id,
  name: `${firstName} ${lastName}`,
  firstName,
  lastName,
  age: `${age}`,
  photo,
  initial: getInitials(firstName, lastName),
  section: firstName && firstName[0].toUpperCase()
});

const getInitials = (firstName, lastName) => {
  const firstinitial = firstName && firstName[0].toUpperCase() || "";
  const lastInitial = lastName && lastName[0].toUpperCase() || "";
  return firstinitial+lastInitial;
};

export default Contact;