import { Link, NavLink, useParams } from 'react-router-dom';
import { Person } from '../../types/Person';
import { getPeople } from '../../api';
import { useEffect, useState } from 'react';

export const PeoplePage = () => {
  const[people, setPeople] = useState<Person[]>([]);

  const { peopleId } = useParams();

  useEffect(()=>{
    const loadPeople = async () => {
      try {
        const loadedPeople = await getPeople();

        setPeople(loadedPeople);
      } catch (err) {
        <p data-cy="peopleLoadingError" className="has-text-danger">
          Something went wrong
        </p>
      } finally {
        {people.length === 0 ? <p data-cy="noPeopleMessage">There are no people on the server</p> : ''}
      }
    }
  })

  return (
    <div className="block">
      <div className="box table-container">
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
      </div>
    </div>
  );

}
