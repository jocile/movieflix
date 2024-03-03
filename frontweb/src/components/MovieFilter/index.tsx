import Select from 'react-select';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';
import { useEffect, useState } from 'react';
import './styles.css';
import { Controller, useForm } from 'react-hook-form';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(
      (response) => {
        setSelectGenres(response.data);
      }
    );
  }, []);

  return (
    <div className="base-card movie-filter-container text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="movie-filter-genre-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                isClearable
                classNamePrefix="genre-filter-select"
                onChange={(value) => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: 'gray',
                    primary: '#6c6c6c',
                  },
                })}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
