
import EpochPanel from './EpochPanel';
import MyDepositsPanel from './MyDepositsPanel';

const WithdrawTabContent = () => {
  return (
    <div className='space-y-4'>
      <EpochPanel />
      <MyDepositsPanel />
    </div>
  );
};

export default WithdrawTabContent;
