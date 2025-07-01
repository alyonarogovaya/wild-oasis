import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsForBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  const initialValues = {
    minBookingLength,
    maxBookingLength,
    maxGuestsForBooking,
    breakfastPrice,
  };

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;

    const newValue = e.target.value;

    if (!newValue || String(initialValues[field]) === newValue) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isUpdating}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isUpdating}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          onBlur={(e) => handleUpdate(e, "maxGuestsForBooking")}
          disabled={isUpdating}
          type="number"
          id="max-guests"
          defaultValue={maxGuestsForBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isUpdating}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
