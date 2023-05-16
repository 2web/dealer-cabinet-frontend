import { useState, useEffect } from 'react';
import Orders from './OrdersTableItem';
import {OrdersTableItemGeneric} from '../../utils/types';

import Image01 from '../../assets/icon-profstroy.png';

function OrdersTable({ selectedItems }: { selectedItems: (items: string[]) => void }) {

  const orders = [
    {
      id: '0',
      image: Image01,
      order: 'N4-125468-31-2',
      orderdesc: 'Изделия ПВХ. комплектация',
      date: '15 мин. назад',
      customer: 'Частный клиент [1]',
      status: 'Рассчитан',
      type: 'Тон. пленка RAL5005',
      description: 'Отгрузка в пятницу',
      error: 'Ошибка при выгрузке данных'
    },
    {
      id: '1',
      image: Image01,
      order: 'N4-125788',
      orderdesc: 'Изделия ПВХ. комплектация',
      date: 'час назад',
      customer: 'Любовь Петровна',
      status: 'Ведется подготовка к производству',
      type: 'Ручки-тянучки',
      description: '-',
      error: ''
    },
    {
      id: '2',
      image: Image01,
      order: 'L4-198989',
      orderdesc: 'Изделия ПВХ. комплектация',
      date: '2 часа назад',
      customer: 'Частный дом в Молодежном',
      status: 'Запущен в производство на 15.03.2023',
      type: 'Без гарантии',
      description: 'Отгрузка в субботу',
      error: ''
    },
    {
      id: '3',
      image: Image01,
      order: 'N4-455523-1',
      orderdesc: 'Изделия ПВХ кашировка',
      date: '1 день назад',
      customer: ' ',
      status: 'На складе',
      type: '-',
      description: '-',
      error: ''
    }
  ];

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [list, setList] = useState<OrdersTableItemGeneric[]>([]);

  useEffect(() => {
    setList(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map(li => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className=" relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">Все заказы <span className="text-slate-400 font-medium">225</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200">
            {/* Table header */}
            <thead className=" text-slate-500 ">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Номер</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Клиент</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Статус</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Примечание</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Дата</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Меню</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {
              list.map(order => {
                return (
                  <Orders
                    key={order.id}
                    id={order.id}
                    image={order.image}
                    order={order.order}
                    orderdesc={order.orderdesc}
                    date={order.date}
                    customer={order.customer}
                    status={order.status}
                    type={order.type}
                    description={order.description}
                    error={order.error}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(order.id)}
                  />
                )
              })
            }
          </table>

        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
