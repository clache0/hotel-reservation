import hostCoverEntriesData from "../assets/hostCoverEntriesData"
import HostCoverEntry from "./HostCoverEntry"

const HostCover = () => {
    const hostCoverEntries = hostCoverEntriesData.map((item) => (
        <HostCoverEntry
            key={item.id}
            title={item.title}
            description={item.description}
            isCovered={item.isCovered}
            isCoveredComp={item.isCoveredComp}
        />
    ))

    return (
        <div className="host-cover-container">
            <div className="host-cover-title-container">
                <h1 className="host-title">
                    <span className="prim-color">host</span>cover
                </h1>
                <p className="host-title-subtext">for Hosts</p>
            </div>

            <h1 className="host-title host-title-padding">Host with top-to-bottom protection</h1>

            <div className="host-cover-entry-container table-grid">
                <div className="col1"></div>
                <div className="col2">
                    Bnb
                </div>
                <div className="col3">
                    Competitors
                </div>
            </div>

            {hostCoverEntries}

        </div>
    )
}
export default HostCover