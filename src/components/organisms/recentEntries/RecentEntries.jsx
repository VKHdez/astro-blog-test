import React,{useEffect,useState} from 'react';

export const RecentEntries = ({entries}) => {
    
    function dashedFormatEntry(entry){
        return entry.replaceAll(" ", "-").toLowerCase();
    }

    return(
        <div className="py-4">
            <h2 className="text-2xl font-bold font-serif my-2">Recent Entries</h2>

            {
                entries.map(entry => {
                    return (
                        <div 
                            className="
                                px-4
                                py-2
                                border
                                border-orange-50
                                hover:border-orange-800
                                hover:bg-orange-100
                                hover:text-orange-800
                                rounded-md
                            "
                            key={dashedFormatEntry(entry)}
                        >
                            <a href={"/posts/"+dashedFormatEntry(entry)} className="block">
                                {entry}
                            </a>
                        </div>
                    );
                })
            }
        </div>
    );
}
