import React from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid';

const Profile: React.FC = () => {
  return (
    <div className="px-4 sm:px-0">
      <h3 className="text-base font-semibold leading-7 text-gray-900">Thông Tin Cá Nhân</h3>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {renderItem('Full name', 'Number Luli')}
          {renderItem('Tài Khoản:', 'User Website')}
          {renderItem('Email address', 'margotfoster@example.com')}
          {renderItem('Tổng Tiền:', '120,000 VND')}
          {renderItem('About', 'Tài khoản khách hàng')}
        </dl>
      </div>
    </div>
  );
};

const renderItem = (label: string, value: string) => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={label}>
    <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
  </div>
);

export default Profile;
