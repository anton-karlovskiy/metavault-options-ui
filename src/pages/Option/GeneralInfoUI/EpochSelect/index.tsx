
import * as React from 'react';

import Select, {
  SelectButton,
  SelectOptions,
  SelectOption,
  SelectBody,
  SelectCheck,
  SelectText
} from 'components/UI/Select';

const EPOCHS = [
  {
    id: 1,
    current: false
  },
  {
    id: 2,
    current: false
  },
  {
    id: 3,
    current: false
  },
  {
    id: 4,
    current: true
  }
];

const EpochSelect = () => {
  const [value, setValue] = React.useState(EPOCHS[0]);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <Select
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      value={value}
      onChange={handleChange}>
      {({ open }) => (
        <>
          <SelectBody>
            <SelectButton className='w-44'>
              <SelectText>
                Epoch {value.id}{value.current ? ' (Current)' : ''}
              </SelectText>
            </SelectButton>
            <SelectOptions open={open}>
              {EPOCHS.map(item => (
                <SelectOption
                  key={item.id}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  value={item}>
                  {({
                    selected,
                    active
                  }) => (
                    <>
                      <SelectText selected={selected}>
                        Epoch {item.id}{item.current ? ' (Current)' : ''}
                      </SelectText>
                      {selected ? (
                        <SelectCheck active={active} />
                      ) : null}
                    </>
                  )}
                </SelectOption>
              ))}
            </SelectOptions>
          </SelectBody>
        </>
      )}
    </Select>
  );
};

export default EpochSelect;
