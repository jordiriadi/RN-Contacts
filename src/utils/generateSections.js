import sortByField from './sort';

const generateSections = (data) => {
  const dataBySections = data.reduce((sections = [], item) => {
    const sectionIndex = sections.findIndex(section => section.title === item.section);

    if (sectionIndex < 0) {
      return sections.concat({ title: item.section, data: [item] });
    }

    sections[sectionIndex] = Object.assign({}, sections[sectionIndex], { data: sections[sectionIndex].data.concat(item).sort(sortByField("firstName")) })

    return sections;

  }, []);

  const sortedSections = dataBySections.sort(sortByField("title"));

  return sortedSections;
}

export default generateSections;