import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './showTasks.css';

const data = {
  columns: [
      {
        label: 'State',
        field: 'check',
        sort: 'asc',
        width: 20
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 350
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Start date',
        field: 'stdate',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Finish date',
        field: 'fhdate',
        sort: 'asc',
        width: 200
      }
  ],
  rows: [
      {
        check: <input type="checkbox" />,
        name: 'Read book',
        type: 'Learn',
        stdate: '2019/12/02',
        fhdate: '2019/12/30'
      },
      {
        check: <input type="checkbox" />,
        name: 'Write some test',
        type: 'Progremming',
        stdate: '2019/12/23',
        fhdate: '2019/12/12'
      },
      {
        check: <input type="checkbox" />,
        name: 'Add some digits',
        type: 'Math',
        stdate: '2019/12/15',
        fhdate: '2019/12/30'
      },
  ]
}

const ShowTasks = () => {

  return (
      <MDBDataTable
        striped
        bordered
        hover
        data={data}
      />
  );
} 

export default ShowTasks;