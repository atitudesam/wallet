import { useState } from 'react';
// import Profile from './Profile';

const Settings = () => {

  const [tabSelected,setTabSelected] = useState('profile');

  return (
    <>
      <div className="p-10">
        <h2 className="font-semibold text-xl mb-6">Settings</h2>

        <ul className="flex border-b mb-6">
          <li className={tabSelected == 'profile' ? ' border-orange-600 border-b pb-3 mr-6':'mr-6'}>
            <a onClick={()=>setTabSelected('profile')} className={tabSelected == 'profile' ? 'text-orange-600':'text-gray-600 hover:text-orange-600'} href="#profile">Profile</a>
          </li>
          <li className={tabSelected == 'security' ? ' border-orange-600 border-b pb-3 mr-6':'mr-6'}>
            <a onClick={()=>setTabSelected('security')} className={tabSelected == 'security' ? 'text-orange-600':'text-gray-600 hover:text-orange-600'} href="#security">Security</a>
          </li>
          <li className={tabSelected == 'kyc' ? ' border-orange-600 border-b pb-3 mr-6':'mr-6'}>
            <a onClick={()=>setTabSelected('kyc')} className={tabSelected == 'kyc' ? 'text-orange-600':'text-gray-600 hover:text-orange-600'} href="#kyc">KYC</a>
          </li>
        </ul>

      </div>

      {/* {
        tabSelected == 'profile' ? (
          <Profile />
        ): ('Work tab selected')
      } */}

    </>
  )

}

export default Settings;
