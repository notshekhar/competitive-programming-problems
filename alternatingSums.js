// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

function alternatingSums(a) {
    let counter = 0
    let sums = [0, 0]
    for (let i = 0; i < a.length; i++) {
        counter %= 2
        sums[counter] += a[i]
        counter++
    }
    return sums
}

// drop table if exists ALL_PLUGINS cascade;                                     
//  drop table if exists APPLICABLE_ROLES cascade;                                
//  drop table if exists CHARACTER_SETS cascade;                                  
//  drop table if exists CHECK_CONSTRAINTS cascade;                               
//  drop table if exists COLLATIONS cascade;                                      
//  drop table if exists COLLATION_CHARACTER_SET_APPLICABILITY cascade;           
//  drop table if exists COLUMNS cascade;                                         
//  drop table if exists COLUMN_PRIVILEGES cascade;                               
//  drop table if exists ENABLED_ROLES cascade;                                   
//  drop table if exists ENGINES cascade;                                         
//  drop table if exists EVENTS cascade;                                          
//  drop table if exists FILES cascade;                                           
//  drop table if exists GLOBAL_STATUS cascade;                                   
//  drop table if exists GLOBAL_VARIABLES cascade;                                
//  drop table if exists KEY_CACHES cascade;                                      
//  drop table if exists KEY_COLUMN_USAGE cascade;                                
//  drop table if exists OPTIMIZER_TRACE cascade;                                 
//  drop table if exists PARAMETERS cascade;                                      
//  drop table if exists PARTITIONS cascade;                                      
//  drop table if exists PLUGINS cascade;                                         
//  drop table if exists PROCESSLIST cascade;                                     
//  drop table if exists PROFILING cascade;                                       
//  drop table if exists REFERENTIAL_CONSTRAINTS cascade;                         
//  drop table if exists ROUTINES cascade;                                        
//  drop table if exists SCHEMATA cascade;                                        
//  drop table if exists SCHEMA_PRIVILEGES cascade;                               
//  drop table if exists SESSION_STATUS cascade;                                  
//  drop table if exists SESSION_VARIABLES cascade;                               
//  drop table if exists STATISTICS cascade;                                      
//  drop table if exists SYSTEM_VARIABLES cascade;                                
//  drop table if exists TABLES cascade;                                          
//  drop table if exists TABLESPACES cascade;                                     
//  drop table if exists TABLE_CONSTRAINTS cascade;                               
//  drop table if exists TABLE_PRIVILEGES cascade;                                
//  drop table if exists TRIGGERS cascade;                                        
//  drop table if exists USER_PRIVILEGES cascade;                                 
//  drop table if exists VIEWS cascade;                                           
//  drop table if exists GEOMETRY_COLUMNS cascade;                                
//  drop table if exists SPATIAL_REF_SYS cascade;                                 
//  drop table if exists CLIENT_STATISTICS cascade;                               
//  drop table if exists INDEX_STATISTICS cascade;                                
//  drop table if exists INNODB_SYS_DATAFILES cascade;                            
//  drop table if exists USER_STATISTICS cascade;                                 
//  drop table if exists INNODB_SYS_TABLESTATS cascade;                           
//  drop table if exists INNODB_LOCKS cascade;                                    
//  drop table if exists INNODB_MUTEXES cascade;                                  
//  drop table if exists INNODB_CMPMEM cascade;                                   
//  drop table if exists INNODB_CMP_PER_INDEX cascade;                            
//  drop table if exists INNODB_CMP cascade;                                      
//  drop table if exists INNODB_FT_DELETED cascade;                               
//  drop table if exists INNODB_CMP_RESET cascade;                                
//  drop table if exists INNODB_LOCK_WAITS cascade;                               
//  drop table if exists TABLE_STATISTICS cascade;                                
//  drop table if exists INNODB_TABLESPACES_ENCRYPTION cascade;                   
//  drop table if exists INNODB_BUFFER_PAGE_LRU cascade;                          
//  drop table if exists INNODB_SYS_FIELDS cascade;                               
//  drop table if exists INNODB_CMPMEM_RESET cascade;                             
//  drop table if exists INNODB_SYS_COLUMNS cascade;                              
//  drop table if exists INNODB_FT_INDEX_TABLE cascade;                           
//  drop table if exists INNODB_CMP_PER_INDEX_RESET cascade;                      
//  drop table if exists user_variables cascade;                                  
//  drop table if exists INNODB_FT_INDEX_CACHE cascade;                           
//  drop table if exists INNODB_SYS_FOREIGN_COLS cascade;                         
//  drop table if exists INNODB_FT_BEING_DELETED cascade;                         
//  drop table if exists INNODB_BUFFER_POOL_STATS cascade;                        
//  drop table if exists INNODB_TRX cascade;                                      
//  drop table if exists INNODB_SYS_FOREIGN cascade;                              
//  drop table if exists INNODB_SYS_TABLES cascade;                               
//  drop table if exists INNODB_FT_DEFAULT_STOPWORD cascade;                      
//  drop table if exists INNODB_FT_CONFIG cascade;                                
//  drop table if exists INNODB_BUFFER_PAGE cascade;                              
//  drop table if exists INNODB_SYS_TABLESPACES cascade;                          
//  drop table if exists INNODB_METRICS cascade;                                  
//  drop table if exists INNODB_SYS_INDEXES cascade;                              
//  drop table if exists INNODB_SYS_VIRTUAL cascade;                              
//  drop table if exists INNODB_TABLESPACES_SCRUBBING cascade;                    
//  drop table if exists INNODB_SYS_SEMAPHORE_WAITS cascade;                      
//  drop table if exists wp_term_taxonomy cascade;                                
//  drop table if exists wp_woocommerce_order_itemmeta cascade;                   
//  drop table if exists wp_wc_category_lookup cascade;                           
//  drop table if exists wp_yoast_indexable cascade;                              
//  drop table if exists wp_wc_order_coupon_lookup cascade;                       
//  drop table if exists wp_woocommerce_sessions cascade;                         
//  drop table if exists wp_posts cascade;                                        
//  drop table if exists wp_actionscheduler_logs cascade;                         
//  drop table if exists wp_yoast_seo_meta cascade;                               
//  drop table if exists wp_yoast_primary_term cascade;                           
//  drop table if exists wp_wc_admin_note_actions cascade;                        
//  drop table if exists wp_commentmeta cascade;                                  
//  drop table if exists wp_wc_admin_notes cascade;                               
//  drop table if exists wp_wc_order_stats cascade;                               
//  drop table if exists users_data cascade;                                      
//  drop table if exists wp_term_relationships cascade;                           
//  drop table if exists wp_yoast_seo_links cascade;                              
//  drop table if exists wp_um_metadata cascade;                                  
//  drop table if exists wp_woocommerce_downloadable_product_permissions cascade; 
//  drop table if exists wp_woocommerce_tax_rates cascade;                        
//  drop table if exists wp_prli_links cascade;                                   
//  drop table if exists wp_wc_order_product_lookup cascade;                      
//  drop table if exists wp_users cascade;                                        
//  drop table if exists wp_woocommerce_shipping_zones cascade;                   
//  drop table if exists wp_wc_reserved_stock cascade;                            
//  drop table if exists wp_woocommerce_log cascade;                              
//  drop table if exists wp_options cascade;                                      
//  drop table if exists wp_wpforms_tasks_meta cascade;                           
//  drop table if exists wp_wc_webhooks cascade;                                  
//  drop table if exists users cascade;                                           
//  drop table if exists wp_mailchimp_carts cascade;                              
//  drop table if exists wp_woocommerce_payment_tokenmeta cascade;                
//  drop table if exists wp_woocommerce_shipping_zone_locations cascade;          
//  drop table if exists wp_wc_tax_rate_classes cascade;                          
//  drop table if exists wp_actionscheduler_groups cascade;                       
//  drop table if exists wp_actionscheduler_claims cascade;                       
//  drop table if exists wp_termmeta cascade;                                     
//  drop table if exists wp_yoast_indexable_hierarchy cascade;                    
//  drop table if exists wp_woocommerce_api_keys cascade;                         
//  drop table if exists wp_actionscheduler_actions cascade;                      
//  drop table if exists wp_usermeta cascade;                                     
//  drop table if exists wp_woocommerce_attribute_taxonomies cascade;             
//  drop table if exists wp_postmeta cascade;                                     
//  drop table if exists wp_mailchimp_jobs cascade;                               
//  drop table if exists wp_prli_clicks cascade;                                  
//  drop table if exists wp_wc_download_log cascade;                              
//  drop table if exists wp_terms cascade;                                        
//  drop table if exists wp_wc_product_meta_lookup cascade;                       
//  drop table if exists wp_woocommerce_payment_tokens cascade;                   
//  drop table if exists wp_wc_order_tax_lookup cascade;                          
//  drop table if exists wp_yoast_migrations cascade;                             
//  drop table if exists wp_wc_customer_lookup cascade;                           
//  drop table if exists wp_woocommerce_shipping_zone_methods cascade;            
//  drop table if exists wp_prli_link_metas cascade;                              
//  drop table if exists wp_woocommerce_tax_rate_locations cascade;               
//  drop table if exists wp_links cascade;                                        
//  drop table if exists wp_comments cascade;