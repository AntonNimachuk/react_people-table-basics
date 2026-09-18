import { Person } from '../../types';

type Props = {
  people : Person[];
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  return (
    <table 
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          {people.map(person => (
            <th>person.name</th>
          ))}
        </tr>
      </thead>
      <tbody> 
        <tr>
          {people.map(person => (
      
          ))}
        </tr>
      </tbody>
    </table>
  )
}