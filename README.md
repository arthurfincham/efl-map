query
SELECT ?club ?clubLabel ?venue ?venueLabel ?coordinates
WHERE {
?club wdt:P31 wd:Q476028 .
?club wdt:P115 ?venue .
?club wdt:P118 ?league .
?venue wdt:P625 ?coordinates .

FILTER(?league IN (wd:Q9448, wd:Q19510, wd:Q19565, wd:Q48837))

    SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }

}
GROUP BY ?club ?clubLabel ?venue ?venueLabel ?coordinates
LIMIT 500
