import { Table, TableColumnsType } from "antd";
import { FC } from "react";

interface IProps {
  documents: string[];
}

interface IDataType {
  key: React.Key;
  documentName: string;
  count: number;
}

export const ApplicationTable: FC<IProps> = ({ documents }) => {
  const repeatingDocs = documents.reduce(
    (acc: Record<string, number>, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    },
    {}
  );

  const columns: TableColumnsType<IDataType> = [
    {
      title: "Наименование документа",
      dataIndex: "documentName",
      key: "documentName",
    },
    {
      title: "Количество заявок",
      dataIndex: "count",
      key: "count",
      defaultSortOrder: "descend",
      sorter: (a: IDataType, b: IDataType) => a.count - b.count,
    },
  ];

  const dataSource = Object.entries(repeatingDocs).map(([key, value]) => ({
    key,
    documentName: key,
    count: value,
  }));

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 10 }}
    />
  );
};
