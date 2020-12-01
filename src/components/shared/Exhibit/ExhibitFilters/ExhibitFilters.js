import ExhibitOtherFilters from "./ExhibitOtherFilters/ExhibitOtherFilters"
import ExhibitTypeFilters from "./ExhibitTypeFilters/ExhibitTypeFilters"

const ExhibitFilters = ({changeMuseumReducer, lang, museumReducer}) => {
    return (
        <div>
            <ExhibitTypeFilters changeMuseumReducer={changeMuseumReducer} />
            <ExhibitOtherFilters changeMuseumReducer={changeMuseumReducer} lang={lang} museumReducer={museumReducer}/>
        </div>
    )
}

export default ExhibitFilters