var searchIndex = {};
searchIndex['rustful'] = {"items":[[0,"","rustful",""],[1,"Server","","Receives the HTTP requests and passes them on to handlers."],[1,"Request","","A container for all the request data, including get, set and path variables."],[11,"headers","","Headers from the HTTP request",0],[11,"method","","The HTTP method",0],[11,"path","","The requested path",0],[11,"variables","","Route variables",0],[11,"query","","Query variables from the path",0],[11,"fragment","","The fragment part of the URL (after #), if provided",0],[11,"body","","The raw body part of the request",0],[1,"Response","","An interface for sending HTTP response data to the client."],[11,"headers","","The HTTP response headers. Date, content type (text/plain) and server is automatically set.",1],[11,"status","","The HTTP response status. Ok (200) is default.",1],[2,"RequestAction","","The result from a `RequestPlugin`."],[12,"Continue","","Continue to the next plugin in the stack.",2],[12,"Abort","","Abort and send HTTP status.",2],[2,"ResponseResult","","The result of a response action."],[12,"Success","","The response action was successful.",3],[12,"PluginError","","A response plugin failed.",3],[12,"IoError","","There was an IO error.",3],[2,"ResponseAction","","The result from a `ResponsePlugin`."],[12,"Write","","Continue to the next plugin and maybe write data.",4],[12,"DoNothing","","Do not continue to the next plugin.",4],[12,"Error","","Abort with an error.",4],[2,"ResponseData","",""],[12,"Bytes","","Data in byte form.",5],[12,"ByteSlice","","Data in byte form.",5],[12,"Str","","Data in string form.",5],[12,"StrSlice","","Data in string form.",5],[0,"router","","`Router` stores items, such as request handlers, using an HTTP method and a path as keys."],[1,"Router","rustful::router","Stores items, such as request handlers, using an HTTP method and a path as keys."],[4,"RouterResult","",""],[10,"clone","","",6],[10,"new","","Creates an empty `Router`.",6],[10,"insert_item","","Inserts an item into the `Router` at a given path.",6],[10,"find","","Finds and returns the matching item and variables",6],[10,"from_routes","","Generates a `Router` tree from a set of items and paths.",6],[10,"insert_router","","Insert an other Router at a path. The content of the other Router will be merged with this one.\nContent with the same path and method will be overwritten.",6],[0,"cache","rustful","Utility traits and implementations for cached resources."],[1,"CachedFile","rustful::cache","Cached raw file content."],[1,"CachedProcessedFile","","A processed cached file."],[6,"CachedValue","","This trait provides functions for handling cached resources."],[9,"use_current_value","","`do_this` with the cached value, without loading or reloading it.",7],[9,"load","","Load the cached value.",7],[9,"free","","Free the cached value.",7],[9,"expired","","Check if the cached value has expired.",7],[9,"unused","","Check if the cached value is unused and should be removed.",7],[10,"use_value","","Reload the cached value if it has expired and `do_this` with it.",7],[10,"clean","","Free the cached value if it's unused.",7],[10,"new","","Creates a new `CachedFile` which will be freed `unused_after` seconds after the latest access.",8],[10,"use_current_value","","",8],[10,"load","","",8],[10,"free","","",8],[10,"expired","","",8],[10,"unused","","",8],[10,"new","","Creates a new `CachedProcessedFile` which will be freed `unused_after` seconds after the latest access.\nThe file will be processed by the provided `processor` function each time it's loaded.",9],[10,"use_current_value","","",9],[10,"load","","",9],[10,"free","","",9],[10,"expired","","",9],[10,"unused","","",9],[0,"request_extensions","rustful",""],[6,"QueryBody","rustful::request_extensions",""],[9,"parse_query_body","","",10],[10,"parse_query_body","rustful","Parse the request body as a query string.\nThe body will be decoded as UTF-8 and plain '+' characters will be replaced with spaces.",0],[6,"IntoResponseData","",""],[9,"into_response_data","","",11],[6,"Handler","","A trait for request handlers."],[9,"handle_request","","",12],[6,"Cache","","A trait for cache storage."],[9,"free_unused","","Free all the unused cached resources.",13],[6,"RequestPlugin","","A trait for request plugins."],[9,"modify","","Try to modify the `Request`.",14],[6,"ResponsePlugin","","A trait for response plugins."],[9,"begin","","Set or modify headers before they are sent to the client and maybe initiate the body.",15],[9,"write","","Handle content before writing it to the body.",15],[9,"end","","End of body writing. Last chance to add content.",15],[10,"write","","",4],[10,"do_nothing","","",4],[10,"error","","",4],[10,"as_bytes","","Borrow the content as a byte slice.",5],[10,"into_bytes","","Turns the content into a byte vector. Slices are copied.",5],[10,"as_string","","Borrow the content as a string slice if the content is a string.\nReturns an `None` if the content is a byte vector, a byte slice or if the action is `Error`.",5],[10,"into_string","","Extract the contained string or string slice if there is any.\nReturns an `None` if the content is a byte vector, a byte slice or if the action is `Error`.\nSlices are copied.",5],[10,"into_response_data","collections::vec","",16],[10,"into_response_data","collections::string","",17],[10,"into_response_data","rustful","",5],[10,"new","","Create a new `Server` which will listen on the provided port and host address `0.0.0.0`.",18],[10,"with_cache","","Creates a new `Server` with a resource cache.",18],[10,"run","","Start the server and run forever.\nThis will only return if the initial connection fails.",18],[10,"set_host","","Change the host address.",18],[10,"set_clean_interval","","Set the minimal number of seconds between each cache clean.",18],[10,"set_server_name","","Change the server response header.",18],[10,"set_content_type","","Change the default content type.",18],[10,"add_request_plugin","","Add a request plugin to the plugin stack.",18],[10,"add_response_plugin","","Add a response plugin to the plugin stack.",18],[10,"get_config","","",18],[10,"handle_request","","",18],[10,"clone","","",18],[10,"new","","",1],[10,"send","","Writes a string or any other `BytesContainer` to the client.\nThe headers will be written the first time `send()` is called.",1],[10,"begin","","Start writing the response. Headers and status can not be changed after it has been called.",1],[10,"end","","Finish writing the response.",1],[10,"write","","",1]],"paths":[[1,"Request"],[1,"Response"],[2,"RequestAction"],[2,"ResponseResult"],[2,"ResponseAction"],[2,"ResponseData"],[1,"Router"],[6,"CachedValue"],[1,"CachedFile"],[1,"CachedProcessedFile"],[6,"QueryBody"],[6,"IntoResponseData"],[6,"Handler"],[6,"Cache"],[6,"RequestPlugin"],[6,"ResponsePlugin"],[1,"Vec"],[1,"String"],[1,"Server"]]};
initSearch(searchIndex);
