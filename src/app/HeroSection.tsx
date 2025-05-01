const HeroSection = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };
  return (
    <div className="w-xl h-[720] pt-10 justify-center items-center">
      <h1 className="text-5xl mb-2 leading-3.5 font-semibold color-darkblue">
        Organise with Security
        <br />
        Trade with Safety
      </h1>
      <p className="text-2xl leading-2.5 color-darkblue">
        Track your childs school, sports, music and other interest kit. Then
        trade or share with the people you know and trust when it is no longer
        needed, lost or stolen.
      </p>
      <div>
        {/* <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
      </div>
    </div>
  );
};

export default HeroSection;
