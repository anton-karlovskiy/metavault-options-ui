
import * as React from 'react';
import clsx from 'clsx';

import CloseIconButton from 'components/buttons/CloseIconButton';
import MetavaultModal, {
  MetavaultModalProps,
  MetavaultModalInnerWrapper,
  MetavaultModalTitle
} from 'components/UI/MetavaultModal';

interface CustomProps {
  title: string;
  innerWrapperClassName?: string;
  clickAwayToCloseDisabled?: boolean;
}

const ModalWrapper = ({
  open,
  onClose,
  title,
  innerWrapperClassName,
  children,
  clickAwayToCloseDisabled = false
}: Props): JSX.Element => {
  const focusRef = React.useRef(null);

  return (
    <MetavaultModal
      open={open}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClose={clickAwayToCloseDisabled ? () => {} : onClose}
      initialFocus={focusRef}>
      <MetavaultModalInnerWrapper
        className={clsx(
          'p-4',
          innerWrapperClassName
        )}>
        <CloseIconButton
          className={clsx(
            'absolute',
            'top-3',
            'right-3'
          )}
          onClick={onClose}
          ref={focusRef} />
        <MetavaultModalTitle
          className={clsx(
            'text-lg',
            'font-medium'
          )}>
          {title}
        </MetavaultModalTitle>
        {children}
      </MetavaultModalInnerWrapper>
    </MetavaultModal>
  );
};

export type Props = MetavaultModalProps & CustomProps;

export default ModalWrapper;
