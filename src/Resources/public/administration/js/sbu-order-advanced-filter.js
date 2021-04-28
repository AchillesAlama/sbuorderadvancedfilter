(this.webpackJsonp=this.webpackJsonp||[]).push([["sbu-order-advanced-filter"],{"+9xj":function(e,t,a){},AIaJ:function(e,t,a){var n=a("+9xj");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("1fd275aa",n,!0,{})},GErI:function(e,t){e.exports='{% block sw_order_list_sidebar_filter %}\n    {% block sw_order_list_sidebar_filter_items %}\n        <sw-sidebar-item icon="default-action-filter" :badge="numberOfFiltering" :title="$tc(\'sw-order.list.titleSidebarItemFilter\')">\n            <div class="sw-sidebar-item__overview">\n\n                {% block sw_order_list_sidebar_filter_content %}\n                    <div class="sw-sidebar-item__filter-content">\n                            {% block sw_order_list_sidebar_filter_order_status_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.order_status\')"\n                                    :enableClear="!!orderStateId"\n                                    @on-clear="onClearOrderStatus">\n\n                                    {% block sw_order_list_sidebar_filter_order_status_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.orderStateSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.orderStateSelected.name }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_order_status %}\n                                        <template #content>\n                                            <sw-radio-field\n                                                v-model="orderStateId"\n                                                :options="orderStatuses">\n                                            </sw-radio-field>\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_payment_status_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.payment_status\')"\n                                    :enableClear="!!paymentStateId"\n                                    @on-clear="onClearPaymentStatus">\n\n                                    {% block sw_order_list_sidebar_filter_payment_status_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.paymentStateSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.paymentStateSelected.name }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_payment_status %}\n                                        <template #content>\n                                            <sw-radio-field\n                                                v-model="paymentStateId"\n                                                :options="paymentStatuses">\n                                            </sw-radio-field>\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_delivery_status_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.delivery_status\')"\n                                    :enableClear="!!deliveryStateId"\n                                    @on-clear="onClearDeliveryStatus">\n\n                                    {% block sw_order_list_sidebar_filter_delivery_status_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.deliveryStateSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.deliveryStateSelected.name }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_delivery_status %}\n                                        <template #content>\n                                            <sw-radio-field\n                                                v-model="deliveryStateId"\n                                                :options="deliveryStatuses">\n                                            </sw-radio-field>\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_sales_channel_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.sales_channel\')"\n                                    :enableClear="!!salesChannelId"\n                                    @on-clear="onClearSalesChannel">\n\n                                    {% block sw_order_list_sidebar_filter_sales_channel_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.salesChannelSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.salesChannelSelected.name }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_sales_channel %}\n                                        <template #content>\n                                            <sw-radio-field\n                                                v-model="salesChannelId"\n                                                :options="salesChannels">\n                                            </sw-radio-field>\n                                        </template>\n                                    {% endblock %}\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_shipping_method_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.shipping_method\')"\n                                    :enableClear="!!shippingMethodId"\n                                    @on-clear="onClearShippingMethod">\n\n                                    {% block sw_order_list_sidebar_filter_shipping_method_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.shippingMethodSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.shippingMethodSelected.name }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_shipping_method %}\n                                        <template #content>\n                                            <sw-radio-field\n                                                v-model="shippingMethodId"\n                                                :options="shippingMethods">\n                                            </sw-radio-field>\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_payment_method_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.payment_method\')"\n                                    :enableClear="!!paymentMethodId"\n                                    @on-clear="onClearPaymentMethod">\n\n                                    {% block sw_order_list_sidebar_filter_payment_method_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.paymentMethodSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.paymentMethodSelected.name }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_payment_method %}\n                                        <template #content>\n                                            <sw-radio-field\n                                                v-model="paymentMethodId"\n                                                :options="paymentMethods">\n                                            </sw-radio-field>\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_dates_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sbu-order-advanced-filler.date\')"\n                                    :enableClear="!!byDate"\n                                    @on-clear="onClearDates">\n\n                                    {% block sw_order_list_sidebar_filter_dates_selected %}\n                                        <template #filtering>\n                                            <sw-label v-if="filtering.dateSelected" appearance="pill" variant="neutral" size="medium">\n                                                {{ filtering.dateSelected }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_dates %}\n                                        <template #content>\n\n                                            {% block sw_order_list_sidebar_filter_dates_options %}\n                                                <sw-radio-field\n                                                    v-model="byDate"\n                                                    :options="datesOptions"\n                                                    @change="onChangeFilterByDates">\n                                                </sw-radio-field>\n                                            {% endblock %}\n\n                                            {% block sw_order_list_sidebar_filter_custom_start_date %}\n                                                <sw-datepicker\n                                                    dateType="date"\n                                                    v-if="isCustomDate"\n                                                    v-model="customStartDate"\n                                                    :label="$tc(\'sbu-order-advanced-filler.start_date\')">\n                                                </sw-datepicker>\n                                            {% endblock %}\n\n                                            {% block sw_order_list_sidebar_filter_custom_end_date %}\n                                                <sw-datepicker\n                                                    v-if="isCustomDate"\n                                                    v-model="customEndDate"\n                                                    :label="$tc(\'sbu-order-advanced-filler.end_date\')">\n                                                </sw-datepicker>\n                                            {% endblock %}\n\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_affiliate_code_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sw-order.list.titleSidebarItemFilterAffiliateCode\')"\n                                    :enableClear="!!affiliateCodeFilter.length"\n                                    @on-clear="onClearAffiliateCode">\n\n                                    {% block sw_order_list_sidebar_filter_affiliate_code_selected %}\n                                        <template #filtering>\n                                            <sw-label v-for="affiliateCode in affiliateCodeFilter" appearance="pill" variant="neutral" size="medium" :key="affiliateCode">\n                                                {{ affiliateCode }}\n                                            </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_affiliate_code %}\n                                        <template #content>\n                                                <sw-multi-select\n                                                    :options="availableAffiliateCodes"\n                                                    :isLoading="filterLoading"\n                                                    valueProperty="key"\n                                                    labelProperty="key"\n                                                    :value="affiliateCodeFilter"\n                                                    @change="onChangeAffiliateCodeFilter">\n                                                </sw-multi-select>\n                                        </template>\n                                    {% endblock %}\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n                            {% block sw_order_list_sidebar_filter_campaign_code_collapse %}\n                                <sbu-order-advanced-filter-collapse\n                                    :title="$tc(\'sw-order.list.titleSidebarItemFilterCampaignCode\')"\n                                    :enableClear="!!campaignCodeFilter.length"\n                                    @on-clear="onClearCampaignCode">\n\n                                    {% block sw_order_list_sidebar_filter_campaign_code_selected %}\n                                        <template #filtering>\n                                                <sw-label v-for="campaignCode in campaignCodeFilter" appearance="pill" variant="neutral" size="medium" :key="campaignCode">\n                                                    {{ campaignCode }}\n                                                </sw-label>\n                                        </template>\n                                    {% endblock %}\n\n                                    {% block sw_order_list_sidebar_filter_campaign_code %}\n                                        <template #content>\n                                                <sw-multi-select\n                                                    :options="availableCampaignCodes"\n                                                    :isLoading="filterLoading"\n                                                    valueProperty="key"\n                                                    labelProperty="key"\n                                                    @change="onChangeCampaignCodeFilter"\n                                                    :value="campaignCodeFilter">\n                                                </sw-multi-select>\n                                        </template>\n                                    {% endblock %}\n\n                                </sbu-order-advanced-filter-collapse>\n                            {% endblock %}\n\n\n                            <sw-alert \n                            title="$tc(\'sbu-order-advanced-filler.order_statistic\')" \n                            class="sw_order_stats p-0 mb-1 ms-1 me-1" \n                            appearance="default" \n                            :showIcon="false" \n                            :closable="false">\n                                    Total {{ totalMoney }} <br>\n                                    Mono {{ monoNum }} <br>\n                                    Duo {{ duoNum }} <br>\n                                    Travller {{ travllerNum }} <br>\n                                    Codes {{ codesVar }}\n                                <template v-slot:actions>\n                                    <sw-button \n                                    class="sw_order_stats" \n                                    @click="getTotalMoney" \n                                    :disabled="false" \n                                    variant="ghost" \n                                    size="large" \n                                    :square="false" \n                                    :block="false" \n                                    :isLoading="false">\n                                    $tc(\'sbu-order-advanced-filler.calculate\')\n                                    </sw-button>\n                                </template>\n                            </sw-alert>\n\n                    </div>\n                {% endblock %}\n\n                {% block sw_order_list_sidebar_filter_clear_all_filters %}\n                    <div class="sw-sidebar-item__filter-clear_all">\n\n                        {% block sw_order_list_sidebar_filter_clear_all_filters_button %}\n                            <sw-button\n                                size="small"\n                                class="sw-order-list-sidebar-filter-clear-filter"\n                                :disabled="numberOfFiltering === 0"\n                                @click="onClearAllFilter">\n                                {{ $tc(\'sbu-order-advanced-filler.clear_all_filters\') }}\n                            </sw-button>\n                        {% endblock %}\n\n                    </div>\n                {% endblock %}\n            </div>\n\n        </sw-sidebar-item>\n    {% endblock %}\n{% endblock %}\n'},LkTi:function(e,t,a){var n=a("yJB7");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("72b0ba13",n,!0,{})},Nb1Z:function(e,t){const{Component:a}=Shopware;a.override("sw-sidebar-item",{props:{badge:{type:Number,required:!1}}})},Nkrv:function(e,t,a){},TuwJ:function(e,t,a){"use strict";a.r(t);var n=a("GErI"),l=a.n(n);a("hulu");const s=Object.freeze({TODAY:"today",YESTERDAY:"yesterday",LAST_SEVEN_DAYS:"last_seven_days",LAST_THIRTY_DAYS:"last_thirty_days",THIS_MONTH:"this_month",LAST_MONTH:"last_month",CUSTOM:"custom"});const{Component:i}=Shopware,{Criteria:r}=Shopware.Data;i.override("sw-order-list",{template:l.a,inject:["repositoryFactory"],computed:{sateMachineRepository(){return this.repositoryFactory.create("state_machine")},paymentMethodRepository(){return this.repositoryFactory.create("payment_method")},shippingMethodRepository(){return this.repositoryFactory.create("shipping_method")},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},lineItemRepository(){return this.repositoryFactory.create("order_line_item")},today(){const e=new Date;return e.setHours(0,0,0,0),e},orderCriteria(){const e=this.$super("orderCriteria");return console.log(e),e.addAssociation("lineItems").addAggregation(r.count("monoCount","productId")),e.addAggregation(r.sum("totalSum","amountTotal")),this.salesChannelId&&e.addFilter(r.equals("salesChannelId",this.salesChannelId)),this.orderStateId&&e.addFilter(r.equals("stateId",this.orderStateId)),this.paymentStateId&&e.addFilter(r.equals("transactions.stateId",this.paymentStateId)),this.paymentMethodId&&e.addFilter(r.equals("transactions.paymentMethodId",this.paymentMethodId)),this.shippingMethodId&&e.addFilter(r.equals("deliveries.shippingMethodId",this.shippingMethodId)),this.deliveryStateId&&e.addFilter(r.equals("deliveries.stateId",this.deliveryStateId)),this.startDate&&e.addFilter(r.range("orderDate",{gte:this.formatDate(this.startDate)})),this.endDate&&e.addFilter(r.range("orderDate",{lte:this.formatDate(this.endDate)})),e},datesOptions(){return[{value:s.TODAY,name:this.$tc("sbu-order-advanced-filler.today")},{value:s.YESTERDAY,name:this.$tc("sbu-order-advanced-filler.yesterday")},{value:s.LAST_SEVEN_DAYS,name:this.$tc("sbu-order-advanced-filler.last_seven_days")},{value:s.LAST_THIRTY_DAYS,name:this.$tc("sbu-order-advanced-filler.last_thirty_days")},{value:s.THIS_MONTH,name:this.$tc("sbu-order-advanced-filler.this_month")},{value:s.LAST_MONTH,name:this.$tc("sbu-order-advanced-filler.last_month")},{value:s.CUSTOM,name:this.$tc("sbu-order-advanced-filler.custom")}]},isCustomDate(){return this.byDate===s.CUSTOM},stateMachineStateRepository(){return this.repositoryFactory.create("state_machine_state")},numberOfFiltering(){let e=0;return Object.keys(this.filtering).forEach(t=>{e+=this.filtering[t]?1:0}),this.campaignCodeFilter.length&&(e+=1),this.affiliateCodeFilter.length&&(e+=1),e}},watch:{orderStateId(){this.filtering.orderStateSelected=this.orderStateId?this.orderStatuses.get(this.orderStateId):null},paymentStateId(){this.filtering.paymentStateSelected=this.paymentStateId?this.paymentStatuses.get(this.paymentStateId):null},deliveryStateId(){this.filtering.deliveryStateSelected=this.deliveryStateId?this.deliveryStatuses.get(this.deliveryStateId):null},salesChannelId(){this.filtering.salesChannelSelected=this.salesChannelId?this.salesChannels.get(this.salesChannelId):null},shippingMethodId(){this.filtering.shippingMethodSelected=this.shippingMethodId?this.shippingMethods.get(this.shippingMethodId):null},paymentMethodId(){this.filtering.paymentMethodSelected=this.paymentMethodId?this.paymentMethods.get(this.paymentMethodId):null},customStartDate(){this.startDate=this.customStartDate?new Date(this.customStartDate):null,this.filtering.dateSelected=this.customDateText()},customEndDate(){this.endDate=this.customEndDate?new Date(this.customEndDate):null,this.filtering.dateSelected=this.customDateText()},filtering:{deep:!0,handler:"getList"}},data:()=>({filtering:{salesChannelSelected:null,shippingMethodSelected:null,deliveryStateSelected:null,orderStateSelected:null,paymentStateSelected:null,paymentMethodSelected:null,dateSelected:null},salesChannelId:null,salesChannels:[],shippingMethodId:null,shippingMethods:[],deliveryStateId:null,deliveryStatuses:[],orderStateId:null,orderStatuses:[],paymentStateId:null,paymentStatuses:[],paymentMethodId:null,paymentMethods:[],byDate:null,startDate:null,endDate:null,customStartDate:null,customEndDate:null,totalMoney:0,monoNum:0,duoNum:0,travllerNum:0,codesVar:0}),methods:{createdComponent(){this.$super("createdComponent"),this.getAllStates(),this.getDefaultOptions()},async getDefaultOptions(){const e=new r;e.addSorting({field:"name",order:"ASC"}),Promise.all([this.getShippingMethods(e),this.getPaymentMethods(e),this.getSalesChannels(e)])},async getShippingMethods(e){const t=await this.shippingMethodRepository.search(e,Shopware.Context.api);this.shippingMethods=this.parseOptions(t)},async getPaymentMethods(e){const t=await this.paymentMethodRepository.search(e,Shopware.Context.api);this.paymentMethods=this.parseOptions(t)},async getSalesChannels(e){const t=await this.salesChannelRepository.search(e,Shopware.Context.api);this.salesChannels=this.parseOptions(t)},async getAllStates(){const e=await this.stateMachineStateRepository.search(this.stateMachineStateCriteria(),Shopware.Context.api);this.orderStatuses=this.buildTransitionStatuses("order.state",e),this.paymentStatuses=this.buildTransitionStatuses("order_transaction.state",e),this.deliveryStatuses=this.buildTransitionStatuses("order_delivery.state",e)},stateMachineStateCriteria(){const e=new r;return e.addSorting({field:"name",order:"ASC"}),e.addAssociation("stateMachine"),e.addFilter(r.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),e},buildTransitionStatuses:(e,t)=>t.filter(t=>t.stateMachine.technicalName===e).map(e=>({id:e.id,value:e.id,name:e.translated.name})),onClearOrderStatus(){this.orderStateId=null},onClearPaymentStatus(){this.paymentStateId=null},onClearDeliveryStatus(){this.deliveryStateId=null},onClearPaymentMethod(){this.paymentMethodId=null},onClearSalesChannel(){this.salesChannelId=null},onClearShippingMethod(){this.shippingMethodId=null},onClearCampaignCode(){this.campaignCodeFilter=[],this.getList()},onClearAffiliateCode(){this.affiliateCodeFilter=[],this.getList()},onClearStats(){this.totalMoney=0,this.monoNum=0,this.duoNum=0,this.travllerNum=0,this.codesVar=0},onClearDates(){this.byDate=null,this.startDate=null,this.endDate=null,this.filtering.dateSelected=null},onChangeFilterByDates(){switch(this.endDate=this.today,this.byDate){case s.TODAY:this.startDate=this.today;break;case s.YESTERDAY:const e=new Date((new Date).setDate(this.today.getDate()-1));this.startDate=e,this.endDate=e;break;case s.LAST_SEVEN_DAYS:this.startDate=new Date((new Date).setDate(this.today.getDate()-7));break;case s.LAST_THIRTY_DAYS:this.startDate=new Date((new Date).setDate(this.today.getDate()-30));break;case s.THIS_MONTH:this.startDate=new Date((new Date).setDate(1));break;case s.LAST_MONTH:const t=new Date((new Date).setMonth(this.today.getMonth()-1));this.startDate=new Date(t.setDate(1));const a=new Date(this.startDate.getFullYear(),this.startDate.getMonth(),0).getDate();this.endDate=new Date(t.setDate(a));break;default:this.endDate=null,this.startDate=null,this.customStartDate=null,this.customEndDate=null}this.byDate!==s.CUSTOM&&Object.keys(this.datesOptions).forEach(e=>{this.datesOptions[e].value===this.byDate&&(this.filtering.dateSelected=this.datesOptions[e].name)})},onClearAllFilter(){this.onClearOrderStatus(),this.onClearPaymentStatus(),this.onClearDeliveryStatus(),this.onClearPaymentMethod(),this.onClearSalesChannel(),this.onClearShippingMethod(),this.onClearCampaignCode(),this.onClearAffiliateCode(),this.onClearDates()},formatDate:e=>`${e.getFullYear()}-${("0"+(e.getMonth()+1)).slice(-2)}-${e.getDate()}`,parseOptions:e=>e.map(e=>({id:e.id,value:e.id,name:e.translated.name})),customDateText(){return this.startDate&&this.endDate?this.formatDate(this.startDate)+" - "+this.formatDate(this.endDate):this.startDate?this.$tc("sbu-order-advanced-filler.date_starting",0,{starting:this.formatDate(this.startDate)}):this.endDate?this.$tc("sbu-order-advanced-filler.date_ending",0,{ending:this.formatDate(this.endDate)}):null},getTotalMoney(){return this.totalMoney=0,this.monoNum=0,this.duoNum=0,this.travllerNum=0,this.codesVar=0,null}}});var d=a("iuv7"),o=a.n(d);a("LkTi");const{Component:c}=Shopware;c.override("sw-sidebar-navigation-item",{template:o.a});a("Nb1Z");var _=a("vHqU"),h=a.n(_);a("AIaJ");const{Component:p}=Shopware;p.register("sbu-order-advanced-filter-collapse",{template:h.a,props:{title:{type:String,required:!0,default:null},enableClear:{type:Boolean,required:!1,default:!1}},data:()=>({}),created(){this.createdComponent()},methods:{createdComponent(){},onClear(){this.enableClear&&this.$emit("on-clear")}}}),Shopware.Module.register("sbu-order-advanced-filter",{routeMiddleware:function(e,t){e(t)}})},hulu:function(e,t,a){var n=a("Nkrv");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("a716dae2",n,!0,{})},iuv7:function(e,t){e.exports='{% block sw_sidebar_navigation_item_content %}\n\n    {% parent() %}\n\n    <sw-label\n        v-if="sidebarItem.badge && !sidebarItem.showContent"\n        class="sw-sidebar-navigation-item-badge"\n        variant="info"\n        size="small"\n        appearance="circle">\n        {{ sidebarItem.badge }}\n    </sw-label>\n\n{% endblock %}\n'},vHqU:function(e,t){e.exports='{% block sbu_order_advanced_filter_collapse %}\n    <sw-collapse :expandOnLoading="false">\n\n        {% block sbu_order_advanced_filter_collapse_header %}\n            <template #header="{ expanded }">\n                <div class="sbu-order-advance-filter__collapse-header">\n\n                    {% block sbu_order_advanced_filter_collapse_header_title %}\n                        <h4 class="sbu-order-advance-filter__collapse-title">\n\n                            {{ title }}\n\n                            {% block sbu_order_advanced_filter_collapse_header_label_closed %}\n                                <div v-if="!expanded" class="sbu-order-advance-filter__collapse-label">\n                                    <slot name="filtering">\n\n                                    </slot>\n                                </div>\n                            {% endblock %}\n\n                        </h4>\n                    {% endblock %}\n\n                    {% block sbu_order_advanced_filter_collapse_header_icon_expanded %}\n                        <sw-icon\n                            v-if="expanded"\n                            key="filter-collapse-expanded-indicator"\n                            class="sw-media-collapse__button"\n                            name="small-arrow-small-down">\n                        </sw-icon>\n                    {% endblock %}\n\n                    {% block sbu_order_advanced_filter_collapse_header_icon_closed %}\n                        <sw-icon\n                            v-else\n                            key="filter-collapse-expanded-indicator"\n                            class="sw-media-collapse__button"\n                            name="small-arrow-small-right">\n                        </sw-icon>\n                    {% endblock %}\n\n                </div>\n            </template>\n        {% endblock %}\n\n        {% block sbu_order_advanced_filter_collapse_panel_content %}\n            <template #content>\n                <div class="sbu-order-advance-filter__collapse-content">\n                    <slot name="content">{% block sbu_order_advanced_filter_collapse_panel_content_slot %}{% endblock %}</slot>\n\n                    {% block sbu_order_advanced_filter_collapse_panel_content_clear %}\n                        <a class="sbu-order-advance-filter__collapse-clear" :class="{active: enableClear}" @click="onClear">\n                            {{ $tc(\'sbu-order-advanced-filler.clear\') }}\n                        </a>\n                    {% endblock %}\n\n                </div>\n            </template>\n        {% endblock %}\n\n    </sw-collapse>\n{% endblock %}\n'},yJB7:function(e,t,a){}},[["TuwJ","runtime","vendors-node"]]]);