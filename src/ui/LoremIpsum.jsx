function LoremIpsum({ numOfParagraphs = 0 }) {
  const paragraphArray = Array.from(
    { length: numOfParagraphs },
    (_, i) => i + 1,
  );

  return (
    <>
      {paragraphArray.map((idx) => (
        <p className="pt-4" key={idx}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          enim nunc, hendrerit quis suscipit vel, lacinia nec massa. Nullam eget
          scelerisque nisl. Praesent tempor, ligula non maximus dignissim, quam
          lectus pellentesque nulla, non sagittis quam ipsum nec leo. Nulla ut
          felis gravida justo pharetra tincidunt. Ut erat nunc, hendrerit sed
          fermentum nec, scelerisque in purus. Ut sit amet ligula dignissim,
          porttitor arcu nec, faucibus orci. Aliquam convallis gravida lorem et
          aliquet. Etiam ullamcorper vel turpis sed mattis. Phasellus
          consectetur libero a risus ultrices suscipit. Duis consectetur elit
          non diam blandit tristique. Nunc laoreet eros et ex tristique, at
          pulvinar arcu efficitur. Vivamus sit amet sem cursus, tempus purus in,
          accumsan mauris.
        </p>
      ))}

      <br />
    </>
  );
}

export default LoremIpsum;
