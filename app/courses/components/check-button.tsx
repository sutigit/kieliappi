import Button from "@/app/components/button";

export default function CheckButton({
  onPress,
  disabled,
}: {
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Button
      title="Tarkista"
      color="white"
      disabled={disabled}
      backgroundColor="#9333ea"
      borderColor="#581c87"
      onPress={onPress}
    />
  );
}
