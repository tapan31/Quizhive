import NavigationButton from "../components/Button";
import OptionButton from "../components/OptionButton";
import Options from "../components/Options";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Timer from "../components/Timer";

export default function Quiz() {
  return (
    <div className="sm:p-4">
      <Progress />
      <Timer />
      <Question />
      <Options />
      <div className="mt-5 flex items-center justify-between">
        <NavigationButton>Prev </NavigationButton>
        <NavigationButton>Next</NavigationButton>
      </div>
    </div>
  );
}
