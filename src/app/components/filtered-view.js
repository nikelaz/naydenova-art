'use client';
import Card from '../components/card';
import FilterButton from '../components/filter-button';
import {useState, useEffect} from 'react';

function getFilters(artworks) {
  let filtersMap = new Map();

  for (let art of artworks) {
    filtersMap.set(art.acf.category.slug, art.acf.category.name);
  }

  const filters = [{
    slug: 'all', 
    name: 'All'
  }];

  filtersMap.forEach((val, key) => {
    filters.push({
      slug: key,
      name: val
    });
  });

  return filters;
}

const FilteredView = ({artworks}) => {
  const filters = getFilters(artworks);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (!category) return;
    setActiveFilter(category);
  }, [setActiveFilter]);

  return (
    <>
      <div className="flex gap-6 flex-wrap justify-center mb-12">
        {filters.map(filter => (
          <FilterButton
            key={filter.slug}
            isActive={activeFilter === filter.slug}
            onClick={() => setActiveFilter(filter.slug)}
          >
            {filter.name}
          </FilterButton>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {artworks.map(art => (
          <Card
            key={art.id}
            imageUrl={art.acf.image_1}
            imageAlt="artwork thumbnail"
            imageWidth={478}
            imageHeight={478}
            title={art.title.rendered}
            href={`/gallery/${art.slug}`}
            ctaText="Виж Повече"
            isHidden={activeFilter !== 'all' && art.acf.category.slug !== activeFilter}
          />
        ))}
      </div>
    </>
  );
};

export default FilteredView;
