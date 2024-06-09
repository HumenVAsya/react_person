export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let marriedOrNot;

  if (isMarried) {
    if (sex === 'm') {
      marriedOrNot = `${partnerName} is my wife`;
    } else if (sex === 'f') {
      marriedOrNot = `${partnerName} is my husband`;
    }
  } else {
    marriedOrNot = `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{marriedOrNot}</p>
    </section>
  );
};
